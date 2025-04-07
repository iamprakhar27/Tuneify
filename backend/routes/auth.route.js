

import {Router } from "express"
import { authCallback } from "../controller/authCallback.controller.js";

const router = Router()

router.post("/callback",authCallback)

export default router;