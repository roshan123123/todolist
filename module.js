//modules in node.js document

module.exports.getDate=getDate;
function getDate()
{
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var d=new Date();
  // console.log(d.toLocaleDateString('en-us',options));
var p=  d.toLocaleDateString('en-us',options);
return p;
}
// when only one function is there
// module.exports=getDate;
// function getDate()
// {
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   var d=new Date();
//   // console.log(d.toLocaleDateString('en-us',options));
// var p=  d.toLocaleDateString('en-us',options);
// return p;
// }
module.exports.getYear=getYear;//also used for accesssing in same manner in app.js
function getYear()
{
  const options = { year: 'numeric' };
  var d=new Date();
  // console.log(d.toLocaleDateString('en-us',options));
var p=  d.toLocaleDateString('en-us',options);
return p;
}

// we can sorten it by
// exports.getYear=function
// {
//   const options = { year: 'numeric' };
//   var d=new Date();
//   // console.log(d.toLocaleDateString('en-us',options));
// var p=  d.toLocaleDateString('en-us',options);
// return p;
// }
