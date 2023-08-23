import mongoose from "mongoose";
const {Schema} =mongoose;
const newEntry=new Schema({
name:{
    type:String,
    require:true
},
author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
  image: {
    type: String,
    
  }
})
const books=mongoose.model("books",newEntry)
export default books;