"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
//HTTP Methods
router.get("/user", user_controller_1.getUsers); // Get all user list
router.get("/user/:id", user_controller_1.getUserbyID); // Get a specific user
router.put("/user/:id", user_controller_1.updateUser); // Update a specific user
router.post("/user", user_controller_1.createUser); // Create new user
router.delete("/user/:id", user_controller_1.deleteUser); // Delete specific user
exports.default = router;
