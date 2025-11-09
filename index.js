const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

//middle wire
app.use(cors());
app.use(express.json());

//nuviaDBUsers
//u1fERxFEUuyjiX1n
const uri =
  "mongodb+srv://nuviaDBUsers:u1fERxFEUuyjiX1n@newproject10.iqzban8.mongodb.net/?appName=Newproject10";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Simple server is running");
});

app.listen(port, () => {
  console.log(`Simple app listening on port ${port}`);
});
