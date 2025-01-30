import { Router } from "express";
import {
  getUsers,
  updateUser,
  createUser,
  deleteUser,
  getUserbyID
} from "../controllers/user.controller";

const router = Router();

//HTTP Methods
router.get("/user", getUsers); // Get all user list
router.get("/user/:id", getUserbyID); // Get a specific user
router.put("/user/:id", updateUser); // Update a specific user
router.post("/user", createUser); // Create new user
router.delete("/user/:id", deleteUser); // Delete specific user

export default router;