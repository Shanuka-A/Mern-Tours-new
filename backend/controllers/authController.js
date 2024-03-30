import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { Jwt } from "jsonwebtoken";

//user reg
export const register = async(req, res)=>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser =new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo,
        })
        await newUser.save()
        res.status(200).json({success:true, message:'successfully created'})
    
    }catch(err){
        res.status(500).json({success:false, message:'failed to created'})
    }
};


//user login
export const login = async(req, res)=>{

    const email = req.body.email
    try{
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({success:false, message:'User not Found'})
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkCorrectPassword){
            return res.status(401).json({success:false, message:'Incorrect email or password'});
        }

        const {password,role, ...rest}= user._doc;

        //jwt token
        const token= Jwt.sign(
            {id:user._id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expirseIn:"15d"}
        );

        //set token
        res.cookie('accessToken', token, {
            httpOnly:true,
            expires:token.expirseIn,
        }).status(200).json({success:true, message:'successfully login', data:{...rest}});

    }catch(err){
        res.status(500).json({success:false, message:'Failed to login'});
    }
};