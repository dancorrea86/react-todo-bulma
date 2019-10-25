
const Task = require('../models/Task');

module.exports = {
  add:function(req, res) {
    let task = new Task(req.body);

    task.save()
      .then(task => res.status(200).json(task))
      .catch(err => {
        res.status(400).send("There's was an error while adding the task", err)
      });
  },
}

  getAll: function (req, res) {
    Task.find(function(err, tasks) {
      if (err) {
        res.status(400).send("There's was an error while retrieving the tasks");s
      } 
      else {
        res.status(200).json(tasks);
      }
    })
  }
}