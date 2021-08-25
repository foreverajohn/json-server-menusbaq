const express = require("express");
const router = express.Router();

const {
  addRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

router.route("/addrestaurant").post(addRestaurant);
router.route("/").get(getAllRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;
