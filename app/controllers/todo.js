const ToDo = require("../../models/ToDo");

const showTasks = async (req, res) => {
  try {
    const allTasks = await ToDo.findAll();
    const tasksData = allTasks.map((task) => ({
      id: task.id,
      text: task.Task,
    }));
    res.status(200).send(tasksData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed" });
  }
};
const addTask = async (req, res) => {
  try {
    const addingTask = await ToDo.create({ Task: req.body.task });
    res.status(200).json(addingTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed" });
  }
};
const editTask = async (req, res) => {
  try {
    await ToDo.update(
      { Task: req.body.task },
      { where: { id: req.params.id } }
    );
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to edit task" });
  }
};
const deleteTask = async (req, res) => {
  try {
    await ToDo.destroy({ where: { id: req.params.id } });
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to edit task" });
  }
};

module.exports = { showTasks, addTask, editTask, deleteTask };
