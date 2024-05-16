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
        let sql = "update student set attendance = " + req.body.attendance + " where rno = " + req.body.rno;
        con.query(sql, function (err, result) {
            res.send('{"info" : "attendance successfully updated"}');
            // res.send(req.body.rno+" "+req.body.id+" "+req.body.name+" "+req.body.mobno+" "+req.body.sem+" "+req.body.marks+" "+req.body.attendance);
            res.end();
            con.end();
        });
    });
});

module.exports = router;