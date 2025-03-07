const express = require("express");
const router = express.Router();
const {
  createParcel,
  getAllParcels,
  updateParcel,
  getOneParcel,
  getUserParcel,
  deleteParcel,
} = require("../controllers/parcel");

//ADD parcels
router.post("/", createParcel);

//GET all parcels
router.get("/", getAllParcels);

//UPDATE parcel
router.put("/:id", updateParcel);

//GET ONE parcel

router.get("find/:id", getOneParcel);

//GET users parcels
router.post("/user/:email", getUserParcel);

//DELETE Parcels

router.delete("/:id", deleteParcel);

module.exports = router;
