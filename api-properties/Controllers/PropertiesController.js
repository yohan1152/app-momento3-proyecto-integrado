import propertiesModel from '../Models/PropertiesModel';

let controllerProperties = {
    //Permite consultar las propiedades por su ID
    getproperties: async (req,res) =>{
        //Validar si en react native funciona el envío de parametros por url
        try {
            const id = req.query.id;
        
            const property = await propertiesModel.find({_id: id});

            if(property){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: property,
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
    //Permite agregar una nueva propiedad
    addproperty: async (req, res) =>{
        try {
            const {title, type, address, rooms, price, area, image, author} = req.body;

            const newProperty = new propertiesModel({title, type, address, rooms, price, area, image, author});
            const result = await newProperty.save();

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
    //Permite actualizar los datos de una propiedad
    updateproperty: async (req,res) =>{
        try {
            const {id, title, type, address, rooms, price, area, image, author} = req.body;
            const result = await propertiesModel.findByIdAndUpdate(id,{title, type, address, rooms, price, area, image, author});

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
    //Permite eliminar una propiedad
    deleteproperty: async (req,res) =>{
        try {
            const id = req.query.id;
        
            const result = await propertiesModel.findByIdAndDelete(id);

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
    //Listar todas las propiedades
    listproperties: async (req,res) =>{
        try {
            const properties = await propertiesModel.find({});
            //const result = await propertiesModel.find({}).count();

            if(properties){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: properties,
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
    //Permite filtrar las propiedades por usuario
    getpropertiesuser: async (req,res) =>{
        //Validar si en react native funciona el envío de parametros por url
        try {
            const authorid = req.query.authorid;
        
            const properties = await propertiesModel.find({author: authorid});
            //const result = await propertiesModel.find({author: authorid}).count();

            if(properties){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: properties,
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
    //Permite ordenar las propiedades por precio
    getstoredproperties: async (req,res) =>{
        try {
            const properties = await propertiesModel.find().sort("price");
            //const result = await propertiesModel.find({}).count();
            
            if(properties){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: properties,
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

module.exports = controllerProperties;