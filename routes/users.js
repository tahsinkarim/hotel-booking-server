import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

//CREATE
router.post("/", createUser);

//READ BY ID
router.get("/:id", getUser);

//READ ALL
router.get("/", (req, res) => {
  res.send("Hello");
});

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

export default router;
