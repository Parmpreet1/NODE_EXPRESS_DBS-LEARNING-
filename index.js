const express = require("express");
const app = express();
const public_path = `${__dirname}/public`;
const route=express.Router()

//set static folder
app.use(express.static(public_path))

//set view engine 
app.set('view engine','ejs')
// const json='{name:"parm",age:24}'
//   resp.send(json);

// use application level middle ware
const reqFilter=(req,resp,next)=>{
  if(req.query.age<18){
    resp.render('home',{data:{age:"you are under age"}})
  }
  else{
    next()
  }
}

// app.use(reqFilter)

route.use(reqFilter) //use for group middleware


app.get("/",(req, resp) => {
  // resp.sendFile(`${public_path}/home.html`);
  resp.render(`home`,{data:0})
});
app.get("/about", (req, resp) => {
  resp.sendFile(`${public_path}/about.html`);
});
route.get("/contact", (req, resp) => {
  resp.sendFile(`${public_path}/contact_us.html`);
});


//getform data
app.get("/get_data",reqFilter, (req, resp) => {
  // const data=req.query
  resp.render(`home`,{data:req.query});
});
//page not fond error
route.get("*", (req, resp) => {
  resp.sendFile(`${public_path}/page_not_found.html`);
});

app.use(route)// for group middleware apply

//server listen
app.listen(4000, (
) => console.log("http://localhost:4000"));

//middleware is used to filter requests and add restriction to access webpage in website 
//types 
//1. application level middleware
//2. router level middleware

//3. error-handling middleware
//4. built-in middleware
//5. third-party middleware

//why it  use ?  ans: For check user Authentications, filter requests

// 2.Route level middleware 
//    -apply middleware on single route
//    -apply middleware on group of route
