const express=require('express')

const userController=require('../Controller/userController')

const multerConfig=require('../middleware/multermiddleware')

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get-all-users',userController.getallUser)

router.delete('/delete-user/:id',userController.deleteUser)

router.put('/edit/user/:id',multerConfig.single("profile"),userController.editUser)

router.post('/register-user',userController.regUser)

router.get('/get-all-accounts',userController.getAllAccounts)

module.exports=router