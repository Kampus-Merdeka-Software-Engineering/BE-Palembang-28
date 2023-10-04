import express from "express";
import {
  getUsers,
  getUserById,
} from "../controllers/dokterController.js";

const router = express.Router();

router.get("/dokter", getUsers);
router.get("/dokter/:id_dokter", getUserById);

export default router;
