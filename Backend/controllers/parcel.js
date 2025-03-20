const Parcel = require("../models/Parcel");

// 📌 Create a Parcel
const createParcel = async (req, res) => {
  try {
    console.log("📩 Creating new parcel:", req.body);
    
    const newParcel = new Parcel(req.body); // Correct way to create an instance
    const parcel = await newParcel.save(); // Save to DB

    console.log("✅ Parcel created:", parcel);
    res.status(201).json(parcel);
  } catch (error) {
    console.error("❌ Error creating parcel:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Get All Parcels
const getAllParcels = async (req, res) => {
  try {
    console.log("📦 Fetching all parcels...");
    const parcels = await Parcel.find().sort({ createdAt: -1 });

    if (parcels.length === 0) {
      return res.status(200).json({ message: "No parcels found", parcels: [] });
    }

    console.log("✅ Parcels fetched:", parcels.length);
    res.status(200).json(parcels);
  } catch (error) {
    console.error("❌ Error fetching parcels:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Get One Parcel
const getOneParcel = async (req, res) => {
 
  try {
    console.log(`🔎 Searching for parcel with ID: ${req.params.id}`);
    
    const parcel = await Parcel.findById(req.params.id);
   

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    console.log("✅ Parcel found:", parcel);
    res.status(200).json(parcel);
  } catch (error) {
    console.error("❌ Error fetching parcel:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Get User's Parcels
const getUserParcel = async (req, res) => {
  try {
    console.log(`📩 Fetching parcels for user: ${req.body.email}`);
    
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });

    if (parcels.length === 0) {
      return res.status(200).json({ message: "No parcels found for this user", parcels: [] });
    }

    console.log("✅ User parcels fetched:", parcels.length);
    res.status(200).json(parcels);
  } catch (error) {
    console.error("❌ Error fetching user parcels:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Update Parcel
const updateParcel = async (req, res) => {
  try {
    console.log(`✏ Updating parcel with ID: ${req.params.id}`);

    const updatedParcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return updated document
    );

    if (!updatedParcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    console.log("✅ Parcel updated:", updatedParcel);
    res.status(200).json(updatedParcel);
  } catch (error) {
    console.error("❌ Error updating parcel:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Delete Parcel (Fixed `findByidAndDelete`)
const deleteParcel = async (req, res) => {
  try {
    console.log(`🗑 Deleting parcel with ID: ${req.params.id}`);

    const parcel = await Parcel.findByIdAndDelete(req.params.id);

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    console.log("✅ Parcel deleted successfully:", parcel);
    res.status(200).json({ message: "Parcel deleted successfully", parcel });
  } catch (error) {
    console.error("❌ Error deleting parcel:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  createParcel,
  getAllParcels,
  getOneParcel,
  getUserParcel,
  updateParcel,
  deleteParcel,
};
