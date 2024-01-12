const fs=require('fs')
const model=require('../model/product');
const { error } = require('console');
const mongoose=require('mongoose')
const Product=model.product;

exports.create=(req,res)=>{
   const product=new Product(req.body);
   product.save().then(doc=>{
    res.json(req.body)
   }).catch((err)=>{
    res.status(400).json(err)
    console.log('Error of create in controller',err);
   })
}

exports.getAll= async (req,res)=>{
     const products= await Product.find(/*{price:{$gt:1200}}*/)
    res.json(products)
   
}

exports.getOne=async (req,res)=>{

   
    id=req.params.id;
    console.log(id);
    const product=await Product.findById(id)
    res.json(product);

    
}

exports.Replace=async(req,res)=>{
   try {
     id=req.params.id;
      const doc=await Product.findOneAndReplace({_id:id},req.body,{new:true}) 
           
     res.status(201).json(doc)
   } catch (error) {
    res.status(400).json(error)
    console.log("Error Related to replace in Controller",error);
  
   }
    
}

exports.update=async (req,res)=>{
    id=req.params.id;
  try {
      const doc=await Product.findOneAndUpdate({_id:id},req.body,{new:true}) 
            
      res.status(201).json(doc)
  } catch (error) {
    console.log("Error Related to update in Controller",error);
    res.status(400).json(error)
   
  }
    
}

exports.deleteOne=(req,res)=>{
    id=req.params.id;
    const prodindex=products.findIndex(p=>p.id===id)
    const product=products[prodindex]
    products.splice(prodindex,1)
    res.status(201).json(product)}