const authControllers = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();

//Sign up
router.post("/signup", authControllers.signupUser)

//Login
router.post("/login", authControllers.loginUser)

//Refresh
router.post("/refresh", authControllers.rRefreshToken)

//Logout
router.post("/logout", middlewareController.verifyToken ,authControllers.userLogout)

module.exports = router