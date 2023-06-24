import { Router } from "express";
import { uploadFile } from "../controllers/file.controller";

const router = Router();

router.route("/upload").post(uploadFile);

export default router;
