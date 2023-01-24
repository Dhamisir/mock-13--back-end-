const jwt = require("jsonwebtoken")
const authModel = require("../model/auth.model");
const SECRET_KEY = process.env.SECRET_KEY;

// authSignupController
async function authSignupController(name, email, password) {
    let role = "user"
    // console.log(email.includes("@masaischool.com"))

    if (email.includes("@masaischool.com")) {
        role = "admin";
    }

    try {
        let data = await authModel.create({ name, email, password, role })
        return {
            status: 201,
            payload: {
                msg: "User Created Successfully"
            }
        }
    } catch (error) {
        return {
            status: 401,
            payload: {
                msg: error.message
            }
        }
    }

}


// authLoginController
async function authLoginController(email, password) {

    try {
        let data = await authModel.findOne({ email, password })
        // console.log(data)
        let token = jwt.sign({ name: data.name, email: data.email, role: data.role }, SECRET_KEY, { expiresIn: "7d" })
        return {
            status: 201,
            payload: {
                msg: "User login Successfully",
                token
            }
        }
    } catch (error) {
        return {
            status: 401,
            payload: {
                msg: error.message
            }
        }
    }

}


module.exports = { authSignupController, authLoginController }