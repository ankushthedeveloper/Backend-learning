const express=require('express')

const controlleruser=require('../controllers/user')

const router=express.Router();


router
    .get('/',controlleruser.getAll)
    .get('/:id',controlleruser.getOne)
    .post('/',controlleruser.create)
    .put('/:id',controlleruser.Replace)
    .patch('/',controlleruser.update)
    .delete('/',controlleruser.deleteOne)

    exports.router=router