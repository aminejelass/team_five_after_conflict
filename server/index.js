var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();
var cors = require("cors");
var router1 = require("./routers/router1");
var db = require("./db/index.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/rout1", router1);

app.get("/hello", (req, res) => {
    res.send("hello from express");
});
app.get("/", function (req, res) {
    res.send("hello express");
});

app.get("/db", (req, res) => {
    //    db.query("select * from user " , (err,data)=>{
    //        if(err)
    //        {
    //            console.log(err)
    //        }
    //        else{
    //            res.send(data)
    //        }
    //    })
    db.use
        .find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(port, () => {
    console.log(`Express server listening on  ${port}`);
});
