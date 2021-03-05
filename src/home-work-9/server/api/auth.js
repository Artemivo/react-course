const { Router } = require("express");
const dbService = require("../DBService");
const authRouter = Router();

authRouter.post("/", (req, res) => {
  const emailIn = req.body.email;
  const passwordIn = req.body.password;
  const usersArray = dbService.getUsers();
  if (usersArray.length > 0) {
    const userAuth = usersArray.filter(
      (e) => e.email === emailIn && e.password === passwordIn
    );
    if (userAuth.length !== 0) {
      res.send({ success: true, user: userAuth });
    } else {
      res.send({ success: false, user: null });
    }
  }
});

authRouter.get("/me", (req, res) => {

});

module.exports = authRouter;
