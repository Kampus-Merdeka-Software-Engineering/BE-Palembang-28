import express from "express";
import {
  getUsers,
  getUserById
} from "../controllers/poliklinikController.js";

const router = express.Router();

router.get("/poliklinik", getUsers);
router.get("/poliklinik/:id_poliklinik", getUserById);

export default router;
