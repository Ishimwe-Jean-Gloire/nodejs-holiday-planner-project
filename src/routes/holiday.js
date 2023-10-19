import express from "express";
import multer from "multer";
const holidayRouter = express.Router();

const storage =multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"tour_assets");
  },
  filename:function(req,file,cb){
    cb(null,file.originalname);
  },
})
const upload =multer({dest:"tour_assets",storage:storage })
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
holidayRouter.post("/",upload.single("backDropImage"), verifyAdmin, addNewTour);

// update tour
holidayRouter.put("/:id", verifyAdmin, updateTour);

// update tour
holidayRouter.delete("/:id", verifyAdmin, deleteTour);

// getSingleTour
holidayRouter.get("/:id",getSingleTour);

// getAllTour
holidayRouter.get("/",getAllTour);


// getTourBySearch
holidayRouter.get("/search/getTourBySearch",getTourBySearch);
holidayRouter.get("/search/getTourCount",getTourCount);

export default holidayRouter;
