require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const connect = require("./config/db");
const cors = require("cors");

app.use(express.json())
app.use(cors())

// Auth Router
const authRouter = require("./routes/auth.route")
app.use("/auth", authRouter)

// job Router
const jobRouter = require("./routes/jobs.route")
app.use("/job", jobRouter)

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.listen(PORT, async () => {
    await connect()
    console.log(`http://localhost:${PORT}`)
})