const express = require('express');
const router = express.Router();
const multer = require('multer')

const {
  registerUser,
  login,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
  getUserFavorites,
  updateAvatar,
} = require('../controllers/userController');

//MIDLEWARES
const { protect, isAdmin } = require('../middleware/authMiddleware');
const upload = multer({
  storage: multer.memoryStorage(),
});

router.route('/').get(getUsers)
router.route('/:id').get(protect, getUserById).put(protect, updateUser).delete(protect, deleteUser);
router.route('/:id/favorites').get(protect, getUserFavorites)
router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/:id/update-avatar').post(upload.single('avatar'), updateAvatar)

module.exports = router;
