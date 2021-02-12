const express = require("express");
const bodyParser = require("body-parser");
const API_PORT = 3001;
var cors = require('cors');


const jsonParser = bodyParser.json();
const app = express();
const commentRouter = require("./api/comments");
app.use(jsonParser);
app.use(cors());

app.use("/comments", commentRouter);

app.listen(API_PORT, () => {
  console.log(`my server ${API_PORT}`);
});
