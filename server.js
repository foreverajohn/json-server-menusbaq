const express = require("express");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

//DOTENV
const dotenv = require("dotenv");
dotenv.config();

//Import MONGO DB
const connectDB = require("./config/db.js");

//CORS
const cors = require("cors");

//ROUTES
const restaurantRoutes = require("./routes/restaurantRoutes");

//PORT
const PORT = process.env.PORT || 5000;

//Initialize expess
const app = express();

//Connect to mongo DB
connectDB();

//Initialize cors
app.use(cors());

app.use(express.json());

//========================
//API's
//========================

app.get("/", (req, res) => {
  res.send("SERVER IS WORKING");
});

app.use("/api/restaurants", restaurantRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`LIstening on http:localhost:${PORT}`.blue.bold);
});
