import express from "express";
import {
  getUsers,
  getUserById,
  createKeluhan,
  updateKeluhan,
  deleteKeluhan,
} from "../controllers/keluhanController.js";

const router = express.Router();

router.get("/keluhan", getUsers);
router.get("/keluhan/:id_keluhan", getUserById);
router.post("/keluhan", createKeluhan);
router.patch("/keluhan/:id_keluhan", updateKeluhan);
router.delete("/keluhan/:id_keluhan", deleteKeluhan);

export default router;
