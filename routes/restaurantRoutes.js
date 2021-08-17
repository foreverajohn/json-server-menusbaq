import express from 'express';
const router = express.Router()

import { addRestaurant, getAllRestaurants } from '../controllers/restaurantController.js';


router.route("/addrestaurant").post(addRestaurant)
router.route("/").get(getAllRestaurants)

export default router