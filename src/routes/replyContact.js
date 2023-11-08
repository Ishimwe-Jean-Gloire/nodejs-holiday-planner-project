import express from "express";

const replyRouter = express.Router();

import { replyContact } from "../controllers/replyingContact";

/**
 * @swagger
 * components:
 *   schemas:
 *     reply:
 *       type: object
 *       properties:
 *         subject:
 *           type: string
 *           description: The reply subject
 *         message:
 *           type: string
 *           description: The message
 *       required:
 *         - subject
 *         - message
 *
 */


/**
 * tags:
 *   name:Reply-Contact
 *   description:Reply contact after receive message
 */

replyRouter.post("/:contactId", replyContact);


/**
 * @swagger
 * /api/v1/reply/{contactId}:
 *   post:
 *     summary: Reply contact
 *     tags: [Reply-Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/reply'
 *     responses:
 *       200:
 *         description: contact replied successfully
 *         content:
 *           multipart/form-data:
 *             schema:
 *               $ref:'#/components/schemas/reply'
 *       500:
 *         description: internal server error
 */


export default replyRouter;