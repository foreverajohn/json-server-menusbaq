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
        type: String,
        default: 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'
      },
      date: {
        type: Date,
        default: Date.now
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
      }
    }
  ],
  rating: {
    type: Number,
    default: 3
  },
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
