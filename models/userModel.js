const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    favorites: [
        {
            restaurant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant'
            }
        }
    ]

})

module.exports = User = mongoose.model('User', UserSchema)