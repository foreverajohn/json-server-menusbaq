const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  logo: String,
  categories: [
    {
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
      }
    },
  ],
  price: {
    type: Number,
  },
  locations: [
    {
      address: String,
      lat: String,
      lng: String,
      phone: String,
    },
  ],
  featured: Boolean,
  menu_URL: String,
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }

  ],
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ]
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
