const express = require("express");
const router = express.Router();

const {
  addRestaurant,
  addAllRestaurants,
  addAllCategories,
  getAllRestaurants,
  getSingleRestaurant,
  getAllCategories,
  updateRestaurant,
  deleteRestaurant,
  getFeaturedRestaurants,
  getCategoryRestaurants,
} = require("../controllers/restaurantController");

router.route("/addrestaurant").post(addRestaurant);
router.route("/addallrestaurants").post(addAllRestaurants);
router.route("/addallcategories").post(addAllCategories);
router.route("/featured").get(getFeaturedRestaurants);
router.route("/").get(getAllRestaurants);
router.route("/categories").get(getAllCategories);
router.route("/categories/:id").get(getCategoryRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;
