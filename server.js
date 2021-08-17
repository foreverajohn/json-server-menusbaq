import express from 'express'
import colors from 'colors'


//DOTENV
import dotenv from 'dotenv'
dotenv.config();

//Import MONGO DB
import connectDB from './config/db.js'

//CORS
import cors from 'cors'

//ROUTES
import restaurantRoutes from './routes/restaurantRoutes.js'

//PORT
const PORT = process.env.PORT || 5000;

//Initialize expess
const app = express();

//Connect to mongo DB
connectDB();

//Initialize cors
app.use(cors())

app.use(express.json());


//API's

app.get("/", (req, res)=> {
   res.send("SERVER IS WORKING")
});

app.use('/api/restaurants', restaurantRoutes)


app.listen(PORT, ()=> {
   console.log(`LIstening on http:localhost:${PORT}`.blue.bold)
});

