import { tourSchema } from "../models/tour";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.v2;

cloudinary.config({
  cloud_name:process.env.CLOUDNAME,
  api_key:process.env.APIKEY,
  api_secret:process.env.APISECRET,
});
export const addNewTour = async (req, res) => {
  const image =await cloudinary.uploader.upload(req.file.path);
  // console.log(image)
  const newTour = new tourSchema({
    ...req.body,
    backDropImage:req.file.path,
  });

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "tour successfully created",
      data: savedTour,
    });
  } catch (error) {
     console.log(error);
    res.status(500).json({ success: false, message: "Failed to create tour" });
  }
};

// update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await tourSchema.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Tour Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update tour",
    });
  }

};
// delete tour

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await tourSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Tour Successfully deleted",
    });
  } catch (error) {
   
    res.status(500).json({
      success: false,
      message: "Failed to delete tour",
    });
  }
};

// getSingle tour

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await tourSchema.findById(id);

    res.status(200).json({
      success: true,
      message: "Tour retrieved Successfully",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "No tour found",
    });
  }
};

// getAll tour

export const getAllTour = async (req, res) => {
  // for pagination

  const page = parseInt(req.query.page);

  try {
    const tours = await tourSchema
      .find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count:tours.length,
      message: "tour successful retrieved",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "tour not found",
    });
  }
};


// get tour by search

export const getTourBySearch = async(req,res)=>{

  // here i means case sensitive

  const destination = new RegExp(req.query.destination,'i')
  const Seats =parseInt(req.query.Seats)
  const GroupSize =parseInt(req.query.GroupSize)

  try {
    
    const tours =await tourSchema.find({
      city,
      distance:{$gte:destination},
      GroupSize:{$gte:GroupSize},
    });

    res.status(200).json({
      success:true,
      message:"successful",
      data:tours,
    })
  } catch (error) {
    res.status(404).json({
      success:false,
      message:"tour not found",
    });
  }
}

// get tour count

export const getTourCount = async(req,res)=>{
  try {
    const tourCount =await tourSchema.estimatedDocumentCount()

    res.status(200).json({success:true,data:tourCount})
  } catch (error) {
    res.status(500).json({success:false,message:"failed to fetch tour"}) 
  }
}