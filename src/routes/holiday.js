import express from "express";

const holidayRouter = express.Router();

import {
  addNewTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController";

// create new tour
holidayRouter.post("/", addNewTour);

// update tour
holidayRouter.put("/:id", updateTour);

// update tour
holidayRouter.delete("/:id", deleteTour);

// getSingleTour
holidayRouter.get("/:id", getSingleTour);

// getAllTour
holidayRouter.get("/", getAllTour);


// getTourBySearch
holidayRouter.get("/search/getTourBySearch",getTourBySearch);
holidayRouter.get("/search/getTourCount",getTourCount);

export default holidayRouter;
