import express from "express";

import { login, register } from "../controllers/authController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User email
 *         fullNames:
 *           type: string
 *           description: user full names
 *         password:
 *           type: string
 *           description: user password
 *         phoneNumber:
 *           type: string
 *           description: user phone number
 *         location:
 *           type: string
 *         role:
 *           type: string
 *           default: "user"
 *
 */


/**
 * @swagger
 * tags:
 *   name: signup
 *   description: user signup
 */

/**
 * @swagger
 * tags:
 *   name: login
 *   description: user login
 */
router.post("/register", register);

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: create user
 *     tags: [signup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       201:
 *         description: the user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       500:
 *         description: Internal server error
 */

router.post("/login", login);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: user login
 *     tags: [login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       201:
 *         description: the user logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       500:
 *         description: Internal server error
 */
export default router;
