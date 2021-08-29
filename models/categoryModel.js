const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;