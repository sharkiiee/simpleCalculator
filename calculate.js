const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",function(req,res){
  const a = req.query.a;
  const b = req.query.b;
  let response = parseInt(a) + parseInt(b);
  res.json(response);
})

app.listen(3000);