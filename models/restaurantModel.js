const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
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
      lat: String,
      long: String,
      phone: String,
    },
  ],
  featured: {
    type: Boolean,
  },
  menu_URL: {
    type: String,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
        ref: 'User'
      }
    }
  ]
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
