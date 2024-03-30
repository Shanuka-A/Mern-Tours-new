import express from 'express'
import { deleteUser, updateUser, getAllUser, getSingleUser } from '../controllers/userControllers.js'
const router = express.Router()
import { verifyUser } from '../utils/verifyToken.js';


//update user
router.put("/id",verifyUser,updateUser);

//delete user
router.put("/id",verifyUser,deleteUser);

router.put("/id",verifyUser,getSingleUser);

router.put("/id",verifyUser,getAllUser);



export default router