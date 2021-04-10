// incorporating todo list on local server using mongodb database using ongoose


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));//to use body parser
const date=require(__dirname+"/module.js");//this will go in that module and run all the code inside it
app.set('view engine', 'ejs');
app.use(express.static("public"));//this will let other static files like css and images all to render
mongoose.connect("mongodb+srv://Roshan:Roshan@cluster0.xtrcp.mongodb.net/toDoDB") ;//toDoDB is the name of database copied url neesd some changes pass and dbnameafternettill end
// mongoose.connect("mongodb://localhost:27017/toDoDB") ;//toDoDB is the name of database when connecting locally
const _=require("lodash");
//craeting a schema
const taskSchema=new mongoose.Schema(
  {
  name:String
  }
);




// even this works fine
// const taskSchema=
//   {
//   name:String
//   }


const Task=mongoose.model("Task",taskSchema);//will create a tasks collection
//try to keep model as first key capital then only orange shade comes
const Pend=mongoose.model("Pending",taskSchema);


const eat=new Task({
  name:"Eat 2 eggs"

});
const type=new Task({
  name:"Try fastest finger"

});
const cp=new Task({
  name:"Give one contest on codeforces"

});

const defaultarr=[eat,cp,type];





  app.get("/",function(req,res)//when get req from browser TO /  route
  //here route is root
  // {  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };we can remove some thing like month year

    {

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var d=new Date();
      // console.log(d.toLocaleDateString('en-us',options));
    var p=  d.toLocaleDateString('en-us',options);
    var route="/";
    Task.find(function(err,anyThing)//before function we can put some condn
    {//find returns array


      if(err)
      {
        console.log("some error ocuured while reading");
        console.log(err);
      }
     else{
        //we can access now by concept of arrays also a sanything is an arrays
        if(anyThing.length===0)
        {
          Task.insertMany(defaultarr,function(err)
          {
            if(err)
            {
              console.log("error while loading the data to database");
            }
            else{
              console.log("loaded data successfully");
            }
          });


        }

      res.render('index', {items:anyThing,curdate:p,route:route});//passing the items array and other variables value


      }
    });




  });


  app.post("/",function(req,res)
{
    var x=req.body.Newitem;
    if(x.length==0)
    {
      res.redirect("/");
    }
    else{

      const nitem=new Task({
        name:x

      });

      nitem.save();

      res.redirect("/");
}

});

app.post("/delete",function(req,res){
const todel=req.body.checkbox  ;

  Task.deleteOne({_id:todel},function(err){
    if(err)
    {
      console.log("found some error");
    }
    else
    {
      console.log("deleted successfully");
    }

  })
  res.redirect("/");

});








app.listen(process.env.PORT|| 3000,function()
{
  console.log("server working");
});
