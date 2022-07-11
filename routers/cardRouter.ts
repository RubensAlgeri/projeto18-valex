import { Router } from "express";

import * as controller from "../controllers/cardController.js";
import schemaValidator from "../middlewares/schemaValidatorMiddleware.js"
import cardSchema from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.post('/card',schemaValidator(cardSchema) ,controller.postBattle);

export default cardRouter;