const tasklist = require('./../models/index');

const getAllTasks = (req, res) => {

  try {
    const tasks = tasklist.getAllTasks();
    return tasks.then(tasks => {
      return res.json(tasks);
    })
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = getAllTasks;