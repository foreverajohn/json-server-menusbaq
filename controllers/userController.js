const User = require('../models/userModel.js');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncMiddleware');
const multer = require("multer");

//====================================
// @desc     Register user
// @route    POST /api/user/register
// @access   Private/Admin
//====================================

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, avatar } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
    avatar
  })

  const token = user.getSignedJwtToken();

  res.status(201).json({
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      token,
    },
  });
});

//====================================
// @desc     Login user
// @route    POST /api/user/login
// @access   Public
//====================================

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //Validate email and Password
  if (!email || !password) {
    return next(new ErrorResponse('Ambos campos son obligatorios', 400));
  }

  //Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(
      new ErrorResponse('Correo electrónico o contraseña no válidos', 401)
    );
  }

  //Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(
      new ErrorResponse('Correo electrónico o contraseña no válidos', 401)
    );
  }

  const token = user.getSignedJwtToken();

  res.status(200).json({
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
      token,
      favorites: user.favorites
    },
  });
});

//====================================
// @desc     Get user details
// @route    GET /api/user/:id
// @access   Private
//====================================

exports.getUserById = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    user
  });
});

//====================================
// @desc     Get user favorites
// @route    GET /api/user/:id/favorites
// @access   Private
//====================================

exports.getUserFavorites = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    favorites: user.favorites
  });
});

//====================================
// @desc     Update user
// @route    PUT /api/user/:id
// @access   Private/Admin
//====================================

exports.updateUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
  }

  const token = user.getSignedJwtToken();

  const updatedUser = await user.save();

  res.status(200).json({
    success: true,
    user: {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token,
    },
  });
});

//====================================
// @desc     Update user avatar
// @route    PUT /api/user/:id/update-avatar
// @access   Private/Admin
//====================================

exports.updateAvatar = asyncHandler(async (req, res, next) => {

  try {

    await User.findByIdAndUpdate(user._id, { avatar: upload.url })

    res.status(201).json({ success: true, message: 'Your avatar was updated' })
  } catch (error) {

  }

});

//====================================
// @desc     Delete user
// @route    DELETE /api/users/:id
// @access   Private/Admin
//====================================

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new ErrorResponse('El usuario no existe'));
  }

  res
    .status(200)
    .json({ success: true, message: 'Usuario eliminado correctamente' });
});

//=====================================================
// @desc      Get all users
// @route     GET /user
// @access    Private @to-do
//=====================================================
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).populate('favorites.restaurant', 'name categories');

  res
    .status(200)
    .json(users);
});
