import express from "express";

import { createBooking,getBooking,getAllBooking } from "../controllers/bookingController";
import { verifyUser } from "../utils/verifyToken";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     booking:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: User id
 *         tourId:
 *           type: string
 *           description: tour id
 *         isPaid:
 *           type: string
 *           description: if tour is paid
 *         paymentMethod:
 *           type: string
 *           description: payment method used        
 *
 */


/**
 * @swagger
 * tags:
 *   name: booking
 *   description: Booking tour
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearFormat: JWT
 */


router.post("/",verifyUser, createBooking);

/**
 * @swagger
 * /api/v1/booking:
 *   post:
 *     summary: create a new booking
 *     tags: [booking]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/booking'
 *     responses:
 *       200:
 *         description: Your tour is booked
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/booking'
 *       500:
 *         description: Internal Server Error
 */

router.get("/:id",verifyUser, getBooking);




/**
 * @swagger
 * /api/v1/booking:
 *   get:
 *     summary: Get All Bookings
 *     tags: [booking]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/booking'
 *       500:
 *          description: Internal server error
 */      


router.get("/",verifyUser, getAllBooking);

export default router;
