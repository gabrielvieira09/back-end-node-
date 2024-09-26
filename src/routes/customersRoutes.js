import { Router } from "express";
import {
   getCustomer,
   getCustomers,
   createCustomerController,
   updateCustomerController,
   deleteCustomerController
} from "../controllers/customersController.js";

const router = Router();

router.get("/customers", getCustomers);
router.post("/customers", createCustomerController);
router.get("/customers/:id", getCustomer);
router.patch("/customers/:id", updateCustomerController);
router.delete("/customers/:id", deleteCustomerController);

export default router;