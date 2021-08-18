import express from "express";
const router = express.Router();

import {
  addRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";

router.route("/addrestaurant").post(addRestaurant);
router.route("/").get(getAllRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

export default router;
