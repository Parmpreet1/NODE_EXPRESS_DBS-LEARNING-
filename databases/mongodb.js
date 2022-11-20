const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const database_name = "mydb_by_mongo";
const collection_name = "node_express_tutorial";

const getdb_collection = async (database_name, collection_name) => {
  //get connection to client with server
  const client = new MongoClient(url);
  await client.connect(); //connect server

  const db = client.db(database_name); //get database
  console.log("Connection successful with database");
  const mycollection = db.collection(collection_name); //get collection
  return mycollection;
};

module.exports = getdb_collection(database_name, collection_name).catch((err) =>
  console.log("getdb_collection: error ", err)
);
