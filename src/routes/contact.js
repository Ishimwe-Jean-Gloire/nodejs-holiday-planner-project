import express from "express";

const contactsRouter = express.Router();

import { createContact, getAllContacts } from "../controllers/contactController";


/**
 * @swagger
 * components:
 *   schemas:
 *     contact:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: user email
 *         replying:
 *           type: string
 *           description: contact replying
 *       required:
 *         - email
 *         - replying          
 *
 */


/**
 * @swagger
 * tags:
 *   name: contact-us
 *   description: contact us page
 */


contactsRouter.post('/', createContact)
contactsRouter.get('/', getAllContacts)

/**
 * @swagger
 * /api/v1/contact:
 *   post:
 *     summary: Create a new contact
 *     tags: [contact-us]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contact'
 *     responses:
 *       200:
 *         description: contact created successfully
 *         content:
 *           multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/contact'
 *       500:
 *         description: Internal server error
 */      




/**
 * @swagger
 * /api/v1/contact:
 *   get:
 *     summary: Get All Contact
 *     tags: [contact-us]
 *     responses:
 *       200:
 *         description: The list of the all contact
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/contact'
 *       500:
 *          description: Internal server error
 */      

export default contactsRouter;