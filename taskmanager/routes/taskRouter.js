const express = require("express");
const router = express.Router();
const {getAllTask,
    getOneTask,
    createTask,
    editTask,
    deleteTask} = require("../controller/taskController")

router.route("/").get(getAllTask);
router.route("/").post(createTask);
router.route("/:id").put(editTask);
router.route("/:id").get(getOneTask);
router.route("/:id").delete(deleteTask);

 module.exports = router;

 