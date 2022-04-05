const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path =require('path');



dotenv.config();
__dirname = path.resolve()


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  var corsOptions = {
    origin: 'https://git.heroku.com/wejk.git',  
    // "origin":'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET, PUT, POST, DELETE"
  }

  app.use(cors(corsOptions))

  if(process.env.NODE_ENV= 'production'){
    app.use(express.static(path.join( __dirname ,"/client/build")))

     app.get("*", (req,response)=>{
      response.sendFile(path.resolve(__dirname, 'client', "build", "index.html"))
    })
  } 

app.use(express.json());
// app.use(express.urlencoded({extended: false}))
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
}); 
