const TaskModel = require("../models/TasksModels");

class TaskControllers {
  static async getAllTask(req, res) {
    try {
      const tasks = await TaskModel.findAll();
      res.status(200).json(tasks);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async getDetailTask(req, res) {
    try {
      const task = await TaskModel.findById(req.params.id);
      res.status(200).json(task);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async deleteTask(req, res) {
    try {
      await TaskModel.deleteTask(req.params.id);
      res.status(200).json({ message: "Task Delete" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async createTask(req, res) {
    try {
      await TaskModel.createTask(req.body);
      res.status(201).json({ message: "Task Created" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async updateTask(req, res) {
    try {
      await TaskModel.updateTask(req.params.id, req.body);
      res.status(201).json({ message: "Task Updated" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async updateStatus(req, res) {
    try {
      await TaskModel.updateStatus(req.params.id, req.body);
      res.status(201).json({ message: "Status Updated" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
  static async updateThemeColor(req, res) {
    try {
      await TaskModel.updateThemeColor(req.params.id, req.body);
      res.status(201).json({ message: "Color Theme Updated" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = TaskControllers;
