const Parcel = require("../models/Parcel");

//create a parcel

const createParcel = async (req, res) => {
  try {
    const newParcels = Parcel(req.body); // Create a new parcel instance
    const parcel = await newParcels.save(); // Save the parcel to the database
     res.status(201).json(parcel); // Use return here
  } catch (error) {
    res.status(500).json(error); // Use return here
  }
};

//Get all parcels

const getAllParcels = async (req, res) => {
  try {
    console.log("Fetching all parcels..."); // Log the start of the function

    const parcels = await Parcel.find().sort({ createdAt: -1 });
    console.log("Parcels fetched:", parcels); // Log the fetched parcels

    if (parcels.length === 0) {
      return res.status(200).json({ message: "No parcels found", parcels: [] });
    }

    res.status(200).json(parcels);
  } catch (error) {
    console.error("Error fetching parcels:", error); // Log the error
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

//Update the parcel

const updateParcel = async (req, res) => {
  try {
    const parcelId = req.params.id; // Get the parcel ID from the request parameters
    const updateData = req.body; // Get the update data from the request body

    // Use findByIdAndUpdate to update the parcel
    const updatedParcel = await Parcel.findByIdAndUpdate(
      parcelId,
      updateData,
      { new: true } // Return the updated document
    );

    if (!updatedParcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    res.status(200).json(updatedParcel); // Send the updated parcel as the response
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


//Get one parcel

const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get User's Parcel

const getUserParcel = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete the Parcel

const deleteParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findByidAndDelete(req.params.id);
    res.status(201).json(parcel,"parcel has been deleted successfully");
  } catch (error) {
    res.status(500).json(error)
  }
};

module.exports = {
  deleteParcel,
  getUserParcel,
  getOneParcel,
  updateParcel,
  getAllParcels,
  createParcel,
};
