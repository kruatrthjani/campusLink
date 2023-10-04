const { login,register, verifyEmail } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/register",register);
router.post("/login", login);

router.post("/account/verify/:id", verifyEmail);
module.exports = router;