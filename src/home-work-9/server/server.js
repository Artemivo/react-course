const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
var cors = require("cors");
const API_PORT = 3001;

const jsonParser = bodyParser.json();
const app = express();
app.use(
  session({
    secret: "1234567890QWERTY",
    cookie: { maxAge: 6000 },
    resave: false,
    saveUninitialized: false,
  })
);
const userRouter = require("./api/users");
const authRouter = require("./api/auth");
app.use(jsonParser);
app.use(cors());
app.use("/", userRouter);
app.use("/auth", authRouter);
app.listen(API_PORT, () => {
  console.log(`server ${API_PORT} online`);
});
