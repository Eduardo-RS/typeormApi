import { Router } from "express";
import {
  getUsers,
  updateUser,
  createUser,
  deleteUser,
} from "../controllers/user.controller";

const router = Router();

//HTTP Methods
router.get("/user", getUsers);
router.put("/user/:id", updateUser);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);

export default router;