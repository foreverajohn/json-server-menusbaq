const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Por favor agregue un nombre'],
  },
  avatar: {
    type: String,
    default: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
  },
  email: {
    type: String,
    required: [true, 'Por favor agregue un correo electrónico'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //Extra validation for the format of an email
      'Por favor, agregue un correo electrónico válido.',
    ],
  },
  password: {
    type: String,
    required: [true, 'Por favor agregue una contraseña'],
    minLength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    select: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  favorites: [
    {
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
      },
      name: { type: String, required: true },
      logo: {
        type: String,
      },
      categories: [
        {
          category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
          },
          name: {
            type: String,
          },
          emoji: {
            type: String,
          },
          color: {
            type: String,
          }
        }
      ],
      price: {
        type: Number,
      },
      locations: [
        {
          name: String,
          address: String,
        },
      ],
      rating: {
        type: Number,
        default: 3
      },
    },
  ],
});

//Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//BCRYPT Password confirmation
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Generate JTW
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model('User', userSchema);
