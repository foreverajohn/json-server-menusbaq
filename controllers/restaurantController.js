const asyncHandler = require('../middleware/asyncMiddleware');
const Restaurant = require('../models/restaurantModel.js');
const Category = require('../models/categoryModel.js');

//=====================================================
// @desc      Create new Restaurant
// @route     POST /api/restaurants/addrestaurant
// @access    Private
//=====================================================
exports.addRestaurant = asyncHandler(async (req, res) => {
  const {
    name,
    logo,
    categories,
    price,
    address,
    featured,
    phone,
    menu_URL,
    comments,
    likes,
  } = req.body;

  const restaurant = await Restaurant.create({
    name,
    logo,
    categories,
    price,
    address,
    featured,
    phone,
    menu_URL,
    comments,
    likes,
  });

  res.status(201).json({
    Success: true,
    message: 'Restaurant created successfully',
    data: restaurant,
  });
});

//=====================================================
// @desc      Create many restaurants
// @route     POST /api/restaurants/addallrestaurants
// @access    Private
//=====================================================
exports.addAllRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.insertMany(req.body);

  res.status(201).json({
    Success: true,
    message: 'Restaurants created successfully',
    data: restaurants,
  });
});

//=====================================================
// @desc      Create many categories at once
// @route     POST /api/restaurants/addallcategories
// @access    Private
//=====================================================
exports.addAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.insertMany(req.body);

  res.status(201).json({
    Success: true,
    message: 'Categories created successfully',
    data: categories,
  });
});

//=====================================================
// @desc      Get All Restaurants
// @route     GET api/restaurants/
// @access    Public
//=====================================================

exports.getAllRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({});

  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants,
  });
});

//=====================================================
// @desc      Get All Restaurants
// @route     GET api/restaurants/categories
// @access    Public
//=====================================================

exports.getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.status(200).json({
    success: true,
    count: categories.length,
    data: categories,
  });
});

//=====================================================
// @desc      Get Single Restaurant
// @route     GET api/restaurants/:id
// @access    Public
//=====================================================

exports.getSingleRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (!restaurant) {
    return next(new ErrorResponse('Restaurant does not exist', 401));
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

exports.updateRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!restaurant) {
    return next(new ErrorResponse('Restaurant does not exist', 401));
  }

  res.status(201).json({
    success: true,
    data: restaurant,
  });
});

//=====================================================
// @desc      Delete Restaurant
// @route     DELETE api/restaurants/:id
// @access    Private
//=====================================================

exports.deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

  if (!restaurant) {
    return next(new ErrorResponse('Restaurant does not exist', 401));
  }

  res.status(200).json({
    success: true,
    message: 'Restaurant deleted succesfully',
  });
});
