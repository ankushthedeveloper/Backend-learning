const express=require('express')

const controllerProduct=require('../controllers/product')

const router=express.Router();

// 2QwljSkHimjTdbO1--db pass

router
    .get('/',controllerProduct.getAll)
    .get('/:id',controllerProduct.getOne)
    .post('/',controllerProduct.create)
    .put('/:id',controllerProduct.Replace)
    .patch('/',controllerProduct.update)
    .delete('/',controllerProduct.deleteOne)

    exports.router=router

