import express from "express";
import { cashIn, paymentTransactions } from "../controllers/payment";
import { cashOut } from "../controllers/payment";

const paymentRoute = express.Router();

/**
 * tags:
 *   name: cashin
 */

paymentRoute.post("/cashin", cashIn);
paymentRoute.post("/transactions", paymentTransactions);

/**
 * @swagger
 * /api/v1/pay/cashin:
 *   post:
 *     summary: CASH IN
 *     tags: [cashin]
 *     description: Create a new cashin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *               amount:
 *                 type: number
 *             required:
 *               - number
 *               - amount
 *     responses:
 *       201:
 *         description: cashin created successfully
 *       500:
 *         description: Internal Server Error
 */

paymentRoute.post("/cashout", cashOut);

/**
 * @swagger
 * /api/v1/pay/cashout:
 *   post:
 *     summary: CASH OUT
 *     tags: [cashin]
 *     description: Create a new cashout.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: string
 *               amount:
 *                 type: number
 *             required:
 *               - number
 *               - amount
 *     responses:
 *       201:
 *         description: cashin created successfully
 *       500:
 *         description: Internal Server Error
 */

export default paymentRoute;
