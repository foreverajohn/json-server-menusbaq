import mongoose from 'mongoose'

const RestaurantSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please provide a name"]
   },
   logo: String,
   categories : [
      {
         categorie: String
      }
   ],
   price: {
      type : Number
   },
   address: [
      {
         location: String,
         lat: String,
         lng: String, 
      }
   ],
   featured: Boolean,
   phone: String,
   menu_URL: String,
})



//Add likes and comments


const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

export default Restaurant;