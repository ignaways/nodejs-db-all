const { getDataBase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");

class TaskModel {
  static async findAll() {
    try {
      const db = await getDataBase();
      const tasks = await db.collection("task").find().toArray();
      return tasks;
    } catch (err) {
      throw new Error(err);
    }
  }
  static async findById(id) {
    try {
      const db = await getDataBase();
      const task = await db.collection("task").findOne({ _id: ObjectId(id) });
      return task;
    } catch (err) {
      throw new Error(err);
    }
  }
  static async createTask(task) {
    try {
      const db = await getDataBase();
      await db.collection("task").insertOne(task);
    } catch (err) {
      throw new Error(err);
    }
  }
  static async deleteTask(id) {
    try {
      const db = await getDataBase();
      await db.collection("task").deleteOne({ _id: ObjectId(id) });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async updateTask(id, task) {
    try {
      const db = getDataBase();
      await db.collection("task").updateOne({ _id: ObjectId(id) }, { $set: task });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async updateStatus(id, status) {
    try {
      const db = getDataBase();
      await db.collection("task").updateOne({ _id: ObjectId(id) }, { $set: status });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async updateThemeColor(id, color) {
    try {
      const db = getDataBase();
      await db.collection("task").updateOne({ _id: ObjectId(id) }, { $set: color });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = TaskModel;
