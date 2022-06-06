require("dotenv").config();

const productJson = require("./product.json");
const connectDB = require("./db/connectDb")
const productSchema = require("./model/product")

const start = async () =>{
    try {
console.log(process.env.MONGO_URI);
        await connectDB(process.env.MONGO_URI);
        console.log("Successfully Connected!!!!");
        await productSchema.deleteMany();
        await productSchema.create(productJson);
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

start();