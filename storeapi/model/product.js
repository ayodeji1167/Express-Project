const mongoose = require("mongoose");

const productSchema = new mongoose.Schema ({
    name : {
        type:String,
        required:[true,"Product Name must be provided"]
    },

    price:{
        type:Number,
        required:[true,"Product price must be provided"]
    },

    featured:{
        type:Boolean,
        default:false
    },

    rating:{
        type:Number,
        default: 4.5
    },

    cretedAt:{
        type:Date,
        default:Date.now
    },

    company:{
        type:String,
        enum:{
            values : ["Apple", "Gucci", "Yale"],
            message: "{VALUE} is not supported"        
        }
    }

})

module.exports = mongoose.model("product", productSchema);