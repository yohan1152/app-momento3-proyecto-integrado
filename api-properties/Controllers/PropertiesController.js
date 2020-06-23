import propertiesModel from '../Models/PropertiesModel';

let controllerProperties = {
    getproperties: async (req,res) =>{
        //Validar si en react native funciona el envío de parametros por url
        const id = req.query.id;
        
        const property = await propertiesModel.find({_id: id});
        if(property){
            return res.status(200).json({property});
        }else{
            return res.status(404).json({
                response: "The property could not be found."
            });
        }
        
    },
    addproperty: async (req, res) =>{
        const {title, type, address, rooms, price, area, image, author} = req.body;
        const newProperty = new propertiesModel({title, type, address, rooms, price, area, image, author});
        
        const result = await newProperty.save();

        if(result){
            return res.status(200).json({
                response: "Successfully added property."
            });
        }else{
            return res.status(404).json({
                response: "The property could not be added."
            });
        }
    },
    updateproperty: async (req,res) =>{
        const id = req.query.id;
        const {title, type, address, rooms, price, area, image, author} = req.body;

        const result = await propertiesModel.findByIdAndUpdate(id,{title, type, address, rooms, price, area, image, author});

        if(result){
            return res.status(200).json({
                response: "Property updated successfully."
            });
        }else{
            return res.status(404).json({
                response: "The property could not be updated."
            });
        }
        
    },
    deleteproperty: async (req,res) =>{
        const id = req.query.id;
        
        const result = await propertiesModel.findByIdAndDelete(id);

        if(result){
            return res.status(200).json({
                response: "Successfully deleted property."
            });
        }else{
            return res.status(404).json({
                response: "The property could not be deleted."
            });
        }
    },
    //Listar todas la propiedades
    listproperties: async (req,res) =>{
        const properties = await propertiesModel.find({});

        const result = await propertiesModel.find({}).count();
        if(result > 0){
            return res.status(200).json({properties});
        }else{
            return res.status(404).json({
                response: "No registered properties."
            });
        }
    },
    //Filtrar propiedades por usuario
    getpropertiesuser: async (req,res) =>{
        //Validar si en react native funciona el envío de parametros por url
        const authorid = req.query.authorid;
        
        const properties = await propertiesModel.find({author: authorid});
        const result = await propertiesModel.find({author: authorid}).count();
        if(result > 0){
            return res.status(200).json({properties});
        }else{
            return res.status(404).json({
                response: "The properties could not be found."
            });
        }
        
    },
    //Ordenar propiedades por precio
    getstoredproperties: async (req,res) =>{
        const properties = await propertiesModel.find().sort("price");

        const result = await propertiesModel.find({}).count();
        if(result > 0){
            return res.status(200).json({properties});
        }else{
            return res.status(404).json({
                response: "No registered properties."
            });
        }
    },
}

module.exports = controllerProperties;