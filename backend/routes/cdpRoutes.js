import express from "express";
import { askCDP } from "../controllers/cdpController.js";

const router = express.Router();

router.post("/", askCDP);

export default router;
