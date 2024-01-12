const mongoose=require('mongoose')
const {Schema}=mongoose;

const productSchema=new Schema({

title:{
    type:String,
    required:true
},
description:String,
price:{type:Number,min:[0,'Wrong price'],required: true},
discountPercentage:Number,
rating:Number,

brand:String,
category:String,
thumbnail:String,

images:[String]
})

exports.product=mongoose.model('Product',productSchema)