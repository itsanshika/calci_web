const express = require("express");
const bodyparser=require("body-parser");

const app= express();
app.use(bodyparser.urlencoded({extended: true}));

const appInsights = require("applicationinsights");
appInsights
  .setup("e280f704-4745-4505-9138-b7a7486b2608")
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  .start()



 app.get("/bmicalci",function(req,res)
{
res.sendFile(__dirname+"/bmicalci.html");
});

app.post("/bmicalci",function(req,res)
{
var n1= Number(req.body.wt);
var n2= Number(req.body.ht);
var result= n1 + n2;
res.send("your bmi is "+result);
});
app.listen(3000,function()
{

  console.log("start");
});
