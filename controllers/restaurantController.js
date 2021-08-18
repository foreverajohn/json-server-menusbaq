import { json } from "express";
import asyncHandler from "express-async-handler";
import Restaurant from "../models/restaurantModel.js";

//=====================================================
// @desc      Create new Restaurant
// @route     POST /api/restaurants/addrestaurant
// @access    Private
//=====================================================
export const addRestaurant = asyncHandler(async (req, res) => {
  const { name, logo, categories, price, address, featured, phone, menu_URL } =
    req.body;

  const restaurant = await Restaurant.create({
    name,
    logo,
    categories,
    price,
    address,
    featured,
    phone,
    menu_URL,
  });

  res.status(201).json({
    Success: true,
    message: "Restaurant created successfully",
    data: restaurant,
  });
});

//=====================================================
// @desc      Get All Restaurants
// @route     GET api/restaurants/
// @access    Public
//=====================================================

export const getAllRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({});

  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants,
  });
});

//=====================================================
// @desc      Get Single Restaurant
// @route     GET api/restaurants/:id
// @access    Public
//=====================================================

export const getSingleRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (!restaurant) {
    throw new Error("Restaurant Does not exist");
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

//=====================================================
// @desc      Update Restaurant
// @route     PUT api/restaurants/:id
// @access    Private
//=====================================================

export const updateRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!restaurant) {
    throw new Error("Restaurant Does not exist");
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

//=====================================================
// @desc      Delete Restaurant
// @route     DELETE api/restaurants/:id
// @access    Private
//=====================================================

export const deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

  if (!restaurant) {
    throw new Error("Restaurant Does not exist");
  }

  res.status(200).json({
    success: true,
    message: "Restaurant deleted succesfully",
  });
});
