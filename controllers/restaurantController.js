import { json } from 'express';
import asyncHandler from 'express-async-handler'
import Restaurant from '../models/restaurantModel.js'


//=====================================================
// @desc      Create new Restaurant
// @route     POST /api/restaurants/addrestaurant
// @access    Private
//=====================================================
export const addRestaurant = asyncHandler(async (req, res) => {
   const {name, logo, categories, price, address, featured, phone, menu_URL } = req.body;


   const restaurant = await Restaurant.create({
      name, 
      logo, 
      categories, 
      price, 
      address, 
      featured, 
      phone, 
      menu_URL
   })

   res.status(201).json({Success: true, message: "Restaurant created successfully"})



})

//=====================================================
// @desc      Get All Restaurants
// @route     GET api/restaurants/
// @access    Public
//=====================================================

export const getAllRestaurants = asyncHandler(async (req,res)=> {

   const restaurants = await Restaurant.find({});

   res.status(200).json({
      success: true,
      count: restaurants.length,
      restaurants 
   })
})