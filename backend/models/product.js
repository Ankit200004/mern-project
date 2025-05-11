import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["spice","dryfruit"]
    },
    price:{
        type: Number,
        required: true
    },
    dicountedprice:{
        type: Number,
    },
    stock:{
        type: Number,
    }
})

const Product = mongoose.model("Product",productSchema)

export default Product

