const express = require("express");
const router = express.Router();
const TaskControllers = require("../controllers/TaksControllers");

router.get("/task", TaskControllers.getAllTask);
router.post("/task", TaskControllers.createTask);
router.get("/task/:id", TaskControllers.getDetailTask);
router.delete("/task/:id", TaskControllers.deleteTask);
router.put("/task/:id", TaskControllers.updateTask);
router.patch("/task/:id/status", TaskControllers.updateStatus);
router.patch("/task/:id/color", TaskControllers.updateThemeColor);

module.exports = router;