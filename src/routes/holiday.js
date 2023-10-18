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

// create new tour
holidayRouter.post("/",upload.single("backDropImage"), addNewTour);

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
