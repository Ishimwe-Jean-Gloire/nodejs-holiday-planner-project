import express from "express";

import { deleteUser, getAllUser, getSingleUser, updateUser, createUser } from "../controllers/userController";

const router = express.Router();

import { verifyUser } from "../utils/verifyToken";

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description:
 *         fullNames:
 *           type: string
 *         password:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         location:
 *           type: string
 *      
 */


/**
 * @swagger
 * tags:
 *   name: user
 */


// create user
router.post("/", createUser);


/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: create new user
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user created successfully 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal Server Error
 */


// update user
router.put("/:id",verifyUser, updateUser);

// update user
router.delete("/:id",verifyUser, deleteUser);

// get Single user
router.get("/:id", verifyUser, getSingleUser);

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Lists all the users
 *     tags: [user]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/Users'
 * 
 */



// get All user
router.get("/", getAllUser);

export default router;