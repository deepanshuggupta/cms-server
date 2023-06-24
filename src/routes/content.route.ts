import { Router } from "express";
import {
  createArticle,
  getArticle,
  getArticles,
} from "../controllers/content.controller";

const router = Router();

router.route("/").post(createArticle);
router.route("/").get(getArticles);
router.route("/:title").get(getArticle);

export default router;
