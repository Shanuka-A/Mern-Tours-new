import User from '../models/User.js';
import User from '../models/User.js';

//create new user
export const createUser = async(req,res) =>{
    const newUser = new User(req.body);

    try{
        const savedUser = await newUser.save();

        res.status(200).json({
            success:true,
            message:"successfully created",
            data: savedUser,
        });

    }catch(err){
        res
        .status(500)
        .json({success:false, message:"failed ro create"});
    }
};

// Update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });

        res.status(200).json({
            success: true,
            message: "User successfully updated",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update user" });
    }
};

//delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;


    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "User successfully deleted",
        
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete user" });
    }
};

//getsingle user
export const getSingleUser = async(req,res) =>{
    const id = req.params.id;

    try{
        const users = await User.findById(id);

        res.status(200).json({
            success:true,
            message:"successfully",
            data: users,
        });

    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
        
    }
};

//getALL user
export const getAllUser = async(req,res) =>{
    

    try{
        const users = await User.find({})

        res.status(200).json({
            success:true,
            message:"successfully",
            data: users,
        });

    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
        
    }
};
