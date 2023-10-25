import express from "express";
import multer from "multer";
const holidayRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tours:
 *       type: object
 *       properties:
 *         destination:
 *           type: string
 *           description: The destination of your Tour
 *         backDropImage:
 *           type: string
 *           format: binary
 *           description: The Tour backDropImage
 *         Title:
 *           type: string
 *           description: The title of your tour
 *         Description:
 *           type: string
 *           description: The tour description
 *         Duration:
 *           type: string
 *         GroupSize:
 *           type: number
 *         Price:
 *           type: number
 *         discountPercentage:
 *           type: number
 *         tourType:
 *           type: string
 *         Departure:
 *           type: string
 *         Seats:
 *           type: number
 *         fromMonth:
 *           type: string
 *         toMonth:
 *           type: string
 *         departureTime:
 *           type: string
 *         returnTime:
 *           type: string
 *         gallery:
 *           type: string
 *           format: format
 *         priceIncluded: 
 *           type: string
 *         priceNotIncluded:
 *           type: string
 *       required:
 *         - destination
 *         - backDropImage
 *         - Title
 *         - Description
 *         - Duration
 *         - GroupSize
 *         - Price
 *         - discountPercentage
 *         - tourType
 *         - Departure
 *         - Seats
 *         - fromMonth
 *         - toMonth
 *         - departureTime
 *         - returnTime
 *         - gallery
 *         - priceIncluded
 *         - priceNotIncluded
 *
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


/**
 * @swagger
 * /api/v1/tours:
 *   get:
 *     summary: Lists all the tour
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the tours
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/Tours'
 * 
 */

/**
 * @swagger
 * /api/v1/tours/{id}:
 *   get:
 *     summary: Get the tour by id
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tour id
 *     responses:
 *       200:
 *         description: The tour description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tours'
 *       404:
 *         description: The Tour was not found
 */



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tour_assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ dest: "tour_assets", storage: storage });
import {
  addNewTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController";

import { verifyAdmin } from "../utils/verifyToken";

// create new tour
holidayRouter.post(
  "/",
  upload.single("backDropImage"),
  addNewTour
);


/**
 * @swagger
 * /api/v1/tours:
 *   post:
 *     summary: create new tour
 *     tags: [Tours]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Tours'
 *     responses:
 *       200:
 *         description: The tour created successfully 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tours'
 *       500:
 *         description: Internal Server Error
 */

// update tour
holidayRouter.put("/:id", updateTour);


/**
 * @swagger
 * /api/v1/tours/{id}:
 *   put:
 *     summary: Update tour by id
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tour id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tours'
 *     responses:
 *       200:
 *         description: The tour updated
 *       404:
 *         description: The tour not found
 *       500: 
 *         description: Internal server error
 */

// update tour
holidayRouter.delete("/:id", deleteTour);


/**
 * @swagger
 * /api/v1/tours/{id}:
 *   delete:
 *     summary: Remove the tour id
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tour id
 *     responses:
 *       200:
 *         description: The tour deleted successfully
 *       404:
 *         description: The tour not found
 */

// getSingleTour
holidayRouter.get("/:id", getSingleTour);

// getAllTour
holidayRouter.get("/", getAllTour);

// getTourBySearch
holidayRouter.get("/search/getTourBySearch", getTourBySearch);
holidayRouter.get("/search/getTourCount", getTourCount);

export default holidayRouter;
