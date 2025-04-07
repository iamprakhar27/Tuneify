
import {Router } from "express"

import { protectRoute, requrireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";

const router = Router()

router.get("/",protectRoute, requrireAdmin, getStats)

export default router;