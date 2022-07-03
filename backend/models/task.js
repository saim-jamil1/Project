var mongoose = require("mongoose");


const TaskSchema = mongoose.Schema({
    // give the values scema ie the types of feilds  it si not always required


    title: String,
    date:String,
    status:String

});
const taskModel = mongoose.model('tasks', TaskSchema);




module.exports.Tasks = taskModel;