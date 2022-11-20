const mycollection = require("./mongodb");

mycollection
  .then((mycollection) => {
    // mycollection.insertMany([{
    //     name:"parm",
    //     age:24,
    // },{
    //     name:"harry",
    //     age:22
    // },{
    //     name:"arsh",
    //     age:"77"
    // }])
    return mycollection.find({}).toArray();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error in collection: ", err);
  });
