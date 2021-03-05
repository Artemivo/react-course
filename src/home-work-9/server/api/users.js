const Router = require("express").Router;
const userRouter = Router();
const shortid = require("shortid");
const dbService = require("../DBService");
let users = [];

userRouter.post("/signup", (req, res) => {
  const newUser = req.body;
  newUser.email = newUser.email.toLowerCase();
  newUser.id = shortid.generate();
  const areEmailAlready = users.some((user) => user.email === newUser.email);
  if (areEmailAlready) {
    return res.status(400).send({ success: false });
  }
  dbService.setUsers(newUser);
  users.push(newUser);
  res.send({ sucess: true });
});

userRouter.get("/users", (req, res) => {
  console.log(req.body);
  res.send(users);
});

module.exports = userRouter;
