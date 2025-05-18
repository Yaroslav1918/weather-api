import express from "express";

import { getWeather } from "../controllers/weatherController.js";
import { subscribe } from "../controllers/subscribeController.js";
import { confirm } from "../controllers/confirmController.js";
import { unsubscribe } from "../controllers/unsubscribeController.js";

const router = express.Router();

router.get("/weather", getWeather);
router.post("/subscribe", subscribe);
router.get("/confirm/:token", confirm);
router.get("/unsubscribe/:token", unsubscribe);

export default router;
