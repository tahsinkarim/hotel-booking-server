import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controllers/roomController.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", createRoom);

//READ BY ID
router.get("/:id", getRoom);

//READ ALL
router.get("/", getAllRoom);

//UPDATE
router.put("/:hotelid", updateRoom);

//DELETE
router.delete("/:id/:hotelid", deleteRoom);

export default router;
