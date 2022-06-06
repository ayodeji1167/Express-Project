const Task = require("../models/taskEntity");
const {createCustomError} = require("../error/CustomError");


//Get All Task
const getAllTask = async (req, res) => {
  try {
    const allTasks =await Task.find({});
    res.status(200).json(allTasks);
  }
   catch (error) {
    res.status(500).json({ mssg: error });
  }
};


//Create Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ mssg: error });
  }
};


//Update Task
const editTask =async  (req, res, next) => {
try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndUpdate(taskId, req.body, {runValidators : true});
    if(!task){
       return next(createCustomError(`No task with id ${taskId} found` , 404))
    }
    res.status(200).json(req.body)

} catch (error) {
    next(error)
}
    
};


//Get Task By Id
const getOneTask = async (req, res) => {
try {
const taskId = req.params.id;
const task = await Task.findOne({_id:taskId});
if(!task){
    return res.status(400).json({mssg: `Task with id ${taskId} not found`});
}
res.status(200).json(task);
}
catch(error){
    res.status(500).json({ mssg: error });

}

};


//Delete Task
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task){
            return res.status(400).json({mssg: `Task with id ${taskId} not found`});
        }
        res.status(200).json(task);
        }
        catch(error){
            res.status(500).json({ mssg: error });
        
        }
        
};



module.exports = {
  getAllTask,
  getOneTask,
  createTask,
  editTask,
  deleteTask,
};
