const express = require('express');
const router = express.Router();

const {
  registerUser,
  login,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

//MIDLEWARES
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.route('/:id').put(protect, updateUser).delete(protect, deleteUser);
router.route('/register').post(registerUser);
router.route('/login').post(login);

module.exports = router;
