require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://dummyApi69:${process.env.MONGODBKEY}@api-dummy.cqbbk.mongodb.net/admin`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbName = "memo_typescrypt";
let db;

async function connect() {
  await client.connect();
  db = client.db(dbName);
}

const getDataBase = () => {
  return db;
};

module.exports = { connect, getDataBase };
