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
<<<<<<< HEAD
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
import path from 'path';
=======
const path =require('path');
const Product = require("./models/Product");

>>>>>>> origin/main


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
// app.use(cors())

  if(process.env.NODE_ENV= 'production'){
    app.use(express.static(path.join( __dirname ,"/client/build")))
    console.log('production')
     app.get("*", (req,response)=>{
      response.sendFile(path.resolve(__dirname, 'client', "build", "index.html"))
    })
  } 

app.get('/', async(req,res)=>{
  console.log('in /')
   const products = await Product.find();
  res.send(products)
})
// app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
}); 
