import express from "express";

import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController";

const router = express.Router();


// update user
router.put("/:id", updateUser);

// update user
router.delete("/:id", deleteUser);

// get Single user
router.get("/:id", getSingleUser);

// get All user
router.get("/", getAllUser);

export default router;