//NODE
// const http=require('http');
// const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
// product=data.products;
// const server=http.createServer((req,res)=>{
// if(req.url.startsWith('/product')){

//     const id= req.url.split('/')[2];
//     prod=product.find(p=>p.id===(+id))
//     console.log(prod);

// res.end(JSON.stringify(prod))
// return  
// }
// });
// server.listen(7899)
//express

//


// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname);
//     next()
// })
// const auth=(req,res,next)=>{
//     if(req.body.password=='123'){
//         next()

//     }
//     else
//     res.sendStatus(401)
//  }
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce ');
console.log('Database Connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

require('dotenv').config()
const express =require('express')
const morgan=require('morgan')

const productRouter=require('./Routes/product')
const userRouter=require('./Routes/user')
const server=express();

server.use(express.json())
server.use(morgan('default'))
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)



server.listen(process.env.PORT,()=>{
    console.log("server started");
})



