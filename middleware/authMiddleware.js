const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncMiddleware');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/userModel');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
    // Set token from cookie
  }

  // Make sure token exists
  if (!token) {
    return next(
      new ErrorResponse('Not authorized to access this route 1 ', 401)
    );
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(
      new ErrorResponse('Not authorized to access this route 2 ', 401)
    );
  }
});

//===============================
// Grant access to admin
//===============================
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
};
