import { Router } from "express";
import {
  createArticle,
  getArticle,
  getArticles,
  searchArticles,
} from "../controllers/content.controller";

const router = Router();

router.route("/").post(createArticle);
router.route("/").get(getArticles);
router.route("/search").get(searchArticles);
router.route("/:title").get(getArticle);

export default router;
