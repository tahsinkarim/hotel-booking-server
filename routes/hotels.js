import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//READ BY ID
router.get("/:id", getHotel);

//READ ALL
router.get("/", getAllHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

export default router;
