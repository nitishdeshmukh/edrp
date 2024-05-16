var express = require("express");
var router = express.Router();
var mysql = require("mysql2");

router.post("", function (req, res){

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "nitish24@@",
        database: "backendProject1",
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        let sql1="select * from teacher where id='"+req.body.id+"'";
        // let sql1="select * from teacher where id='"+req.query.id+"'";
        con.query(sql1,function(err,result){
            if (err) throw err;
            if(result.length > 0){
                res.send('{"info" : "Teacher ID already registered"}');
                // res.send(req.query.name+" "+req.query.id+" "+req.query.mobno);
                res.end();     
                con.end();
            }
            else{
                let sql2 ="INSERT INTO teacher VALUES('" + req.body.name + "','" + req.body.id + "', '"+req.body.mobno+"')";
                // let sql2 ="INSERT INTO teacher VALUES('" + req.query.name + "','" + req.query.id + "', "+req.query.mobno+")";
                con.query(sql2, function (err, result) {
                    if (err) throw err;
                    res.send('{"info" : "account successfully created"}');
                    // res.send(req.query.name+" "+req.query.id+" "+req.query.mobno);
                    res.end();
                    con.end();
                });
            }
        });
    });
});

module.exports = router;