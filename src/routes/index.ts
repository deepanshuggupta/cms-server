import { Router } from "express";
import contentRoute from "./content.route";
import fileRoute from "./file.route";

const router = Router();

const defaultRoutes = [
  {
    path: "/content",
    route: contentRoute,
  },
  {
    path: "/file",
    route: fileRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
