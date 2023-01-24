const express = require("express");
const { authSignupController, authLoginController } = require("../controller/auth.controller");
const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(name, email, password);

    let data = await authSignupController(name, email, password)
    res.status(data.status).send(data.payload)
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);

    let data = await authLoginController(email, password)
    res.status(data.status).send(data.payload)
})



module.exports = router;