const express=require("express");
const app=express();
const mongoose=require("mongoose");
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));//to use body parser
const date=require(__dirname+"/module.js");//this will go in that module and run all the code inside it
app.set('view engine', 'ejs');
var items=["EAT","code"];
var work=[];

  app.use(express.static("public"));//this will let other static files like css and images all to render
  app.get("/",function(req,res)//when get req from browser TO /  route
  //here route is root
  // {  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };we can remove some thing like month year

    {
       console.log("i ran "+date.getYear());
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var d=new Date();
      // console.log(d.toLocaleDateString('en-us',options));
    var p=  d.toLocaleDateString('en-us',options);
    var route="/";
    res.render('index', {items:items,curdate:p,route:route});//passing the items array and other variables value

  });


  app.post("/",function(req,res)
{
    var x=  req.body.Newitem;
    if(x.length==0)
    {
      res.redirect("/");
    }
    else{
      items.push(x);
      res.redirect("/");
}

});
app.get("/work",function(req,res)
{
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var d=new Date();
  // console.log(d.toLocaleDateString('en-us',options));
var p=  d.toLocaleDateString('en-us',options);
var route="/work";
    res.render('index', {items:work,curdate:p,route:route});


});


app.post("/work",function(req,res)
{
var x=req.body.Newitem;
if(x.length==0)
{
  res.redirect("/");
}
else{
  work.push(x);
}
res.redirect("/work");

});

//
//   app.post("/",function(req,res)//for post request
//   {
//   var n1=req.body.First_name,n2=req.body.Second_name;
//   var el=req.body.email;
//
//   console.log(n1);
//     console.log(n2);
//       console.log(el);
//
//
// res.send();
//
//   });

app.listen(3000,function()
{
  console.log("working properly");
});
