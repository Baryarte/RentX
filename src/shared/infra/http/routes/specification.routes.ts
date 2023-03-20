import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticaded";

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRoutes };
