import userModel from '../Models/UserModel';

let controllerUser = {
    //Permite validar si un usuario existe en la BD
    getuserexist: async (req,res) =>{
        try {
            const {email} = req.body;
    
            const userexist = await userModel.find({email: email}).count();

            if(userexist > 0){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }else{
                return res.status(404).json({
                    res: {
                        success: false,
                        data: [],
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error:{
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite buscar un usuario en la BD y trae los datos para almacenar en la variable de session
    getuser: async (req,res) =>{
        try {
            const {email, password} = req.body;
       
            const userlogin = await userModel.find({email: email, password: password});
            const result = await userModel.find({email: email, password: password}).count();

            if(result > 0){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: userlogin,
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }else{
                return res.status(404).json({
                    res: {
                        success: false,
                        data: [],
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.json({
                res: {
                    success: false,
                    data: [],
                    error:{
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite registrar un nuevo usuario
    adduser: async (req, res) =>{
        try {
            const {name, last_name, email, password} = req.body;

            const newUser = new userModel({name, last_name, email, password});
            const result = await newUser.save();

            if(result){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error:{
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
     //Permite actualizar un usuario
     updateuser: async (req,res) =>{
        try {
            const {id, name, last_name, email, password} = req.body;
            const result = await userModel.findByIdAndUpdate(id,{name, last_name, email, password});

            if(result){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error:{
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite eliminar un usuario
    deleteuser: async (req,res) =>{
        try {
            const id = req.query.id;
        
            const result = await userModel.findByIdAndDelete(id);

            if(result){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error:{
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite listar todos los usuarios
    listusers: async (req,res) =>{
        try {
            const users = await userModel.find({});
            //const result = await userModel.find({}).count();

            if(users){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: users,
                        error:{
                            title: null,
                            message: null
                        }
                    }
                });
            }
        } catch (e) {
            return res.status(400).json({
                res: {
                    success: false,
                    data: [],
                    error:{
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
}

module.exports = controllerUser;