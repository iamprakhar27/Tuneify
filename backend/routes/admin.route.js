

import {Router } from "express"
import { checkAdmin, createAlbums, createSong, deleteAlbum, deleteSong } from "../controller/admin.controller.js";
import { protectRoute, requrireAdmin } from "../middleware/auth.middleware.js";

const router = Router()

router.use(protectRoute, requrireAdmin)

router.get("/check", checkAdmin)

router.post("/songs",  createSong )
router.delete("/songs/:id",  deleteSong )

router.post("/albums",  createAlbums )
router.delete("/albums/:id", deleteAlbum)


export default router;