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
  markFavoriteRestaurant,
  reviewRestaurant,
} = require("../controllers/restaurantController");
const { protect } = require("../middleware/authMiddleware");

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

router.route("/:id/favorite").post(protect, markFavoriteRestaurant)
router.route("/:id/review").post(protect, reviewRestaurant)

module.exports = router;
