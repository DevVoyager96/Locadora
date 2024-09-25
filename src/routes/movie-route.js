import { Router } from "express";
import { store, index } from "../controllers/movie-controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticador.js";

const router = Router();

router.post("/", jwtAuthenticator, store);
router.get("/", index);

export default router;