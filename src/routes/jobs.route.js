const express = require("express");
const { jobAddController, jobGetController, jobEditController, jobDeleteController } = require("../controller/job.controller");
const router = express.Router();

router.post("/add-job", async (req, res) => {
    const { company, position, contract, location } = req.body;

    let data = await jobAddController(company, position, contract, location)
    res.status(data.status).send(data.payload)
})

router.get("/get-job", async (req, res) => {
    let data = await jobGetController()
    res.status(data.status).send(data.payload)
})

router.patch("/edit-job/:id", async (req, res) => {
    const { id } = req.params;
    const { company, position, contract, location } = req.body;

    let data = await jobEditController(id, company, position, contract, location)
    res.status(data.status).send(data.payload)
})


router.delete("/delete-job/:id", async (req, res) => {
    const { id } = req.params;

    let data = await jobDeleteController(id)
    res.status(data.status).send(data.payload)
})




module.exports = router;