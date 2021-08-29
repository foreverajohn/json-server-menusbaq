const asyncHandler = require("express-async-handler");
const passport = require('passport')

const User = require("../models/userModel.js");

//=====================================================
// @desc      
// @route     POST /auth/
// @access    Public
//=====================================================

//=====================================================
// @desc      Google Auth Callback
// @route     POST /auth/google/callback
// @access    Public
//=====================================================
