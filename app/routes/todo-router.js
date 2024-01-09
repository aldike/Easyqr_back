const express = require("express");
const router = express.Router();
const {
  showTasks,
  addTask,
  editTask,
  deleteTask,
} = require("../controllers/todo");

router.get("/api/todo/tasks", showTasks);
router.post("/api/todo/add", addTask);
router.put("/api/todo/edit/:id", editTask);
router.delete("/api/todo/delete/:id", deleteTask);

module.exports = router;
