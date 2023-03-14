import express from "express";
import { login } from "../controllers/auth.js";

//Router set-up
const router = express.Router();

router.post("/login", login); //POST at

export default router;