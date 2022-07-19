import express from "express";

import { signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/auth/signin", signIn);
router.post("/auth/signup", signUp);

export default router;
