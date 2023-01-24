const jobModel = require("../model/job.model")

// jobAddController
async function jobAddController(company, position, contract, location) {

    try {
        let data = await jobModel.create({ company, position, contract, location })
        return {
            status: 201,
            payload: {
                msg: data
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


// jobGetController
async function jobGetController() {

    try {
        let data = await jobModel.find()
        // console.log(data)
        return {
            status: 201,
            payload: {
                msg: data
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

// jobEditController
async function jobEditController(id, company, position, contract, location) {

    try {
        let data = await jobModel.findByIdAndUpdate(id, { $set: { company, position, contract, location } }, { new: true })
        // console.log(data)
        return {
            status: 201,
            payload: {
                msg: data
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


// jobDeleteController
async function jobDeleteController(id) {

    try {
        let data = await jobModel.findByIdAndDelete(id)
        // console.log(data)
        return {
            status: 201,
            payload: {
                msg: "Job Delete Succesfull"
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

module.exports = { jobAddController, jobGetController, jobEditController, jobDeleteController }