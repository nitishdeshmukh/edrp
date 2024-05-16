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
        let sql1="select * from student where id='"+req.body.id+"'";
        con.query(sql1,function(err,result){
            if (err) throw err;
            if(result.length>0){
                res.send('{"info" : "Student ID already registered"}');
                // res.send(req.body.rno+" '"+req.body.id+"' '"+req.body.name+"' "+req.body.mobno+" '"+req.body.sem+"' "+req.body.marks+" '"+req.body.attendance);
                res.end();     
                con.end();
            }
            else{
                let sql2 ="INSERT INTO student  VALUES( "+req.body.rno+",'" + req.body.id + "','" + req.body.name + "', '"+req.body.mobno+"','" + req.body.sem + "'," + req.body.marks + ",'" + req.body.attendance + "')";
                con.query(sql2, function (err, result) {
                    if (err) throw err;
                    res.send('{"info" : "account successfully created"}');
                    // res.send(req.body.rno+" "+req.body.id+" "+req.body.name+" "+req.body.mobno+" "+req.body.sem+" "+req.body.marks+" "+req.body.attendance);
                    res.end();
                    con.end();
                });
            }
        });
    });
});
module.exports = router;