import userModel from '../Models/UserModel';

let controllerUser = {
    //Permite buscar un usuario en la BD
    getuser: async (req,res) =>{
        const {email, password} = req.body;
       
        const userlogin = await userModel.find({email: email, password: password});
        const result = await userModel.find({email: email, password: password}).count();

        if(result > 0){
            return res.status(200).json({message: "User validator..."});
        }else{
            return res.status(404).json({
                response: "incorrect User and/or password."
            });
        }
        
    },
    //Permite registrar un nuevo usuario
    adduser: async (req, res) =>{
        const {name, last_name, email, password} = req.body;
        const newUser = new userModel({name, last_name, email, password});
        
        const result = await newUser.save();

        if(result){
            return res.status(200).json({
                response: "Successfully added user."
            });
        }else{
            return res.status(404).json({
                response: "The user could not be added."
            });
        }
    },
    listusers: async (req,res) =>{
        const users = await userModel.find({});

        const result = await userModel.find({}).count();
        if(result > 0){
            return res.status(200).json({users});
        }else{
            return res.status(404).json({
                response: "No registered users."
            });
        }
    },
}

module.exports = controllerUser;