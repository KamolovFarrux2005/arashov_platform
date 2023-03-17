const studentModel = require('../models/students.model');



const StudentsAllGetService = async(req,res)=> {
    try {
        const students = await studentModel.find().sort({createdAt: -1});
        res.status(200).json({
            status: true,
            data: students
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            data: error.message
        })
    }
}

const GetStudentMeDataService = async(req,res)=> {
    try {
        const student = await studentModel.findById({_id: req.params.id});
        res.status(200).json({
            status: true,
            data: student
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            data: error.message
        })
    }
}

module.exports = {
    StudentsAllGetService,
    GetStudentMeDataService,
}