import express from "express";

import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController";

const router = express.Router();

import { verifyUser } from "../utils/verifyToken";

// update user
router.put("/:id",verifyUser, updateUser);

// update user
router.delete("/:id",verifyUser, deleteUser);

// get Single user
router.get("/:id", verifyUser, getSingleUser);

// get All user
router.get("/",verifyUser, getAllUser);

export default router;