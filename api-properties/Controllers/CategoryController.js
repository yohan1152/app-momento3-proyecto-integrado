import categoryModel from '../Models/CategoryModel';

let controllerCategory = {
    //Permite agregar una nueva categoria
    addcategory: async (req, res) =>{
        try {
            const {name_category} = req.body;

            const newCategory = new categoryModel({name_category});
            const result = await newCategory.save();

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
    //Permite actualizar una categoria
    updatecategory: async (req,res) =>{
        try {
            const {id, name_category} = req.body;
            const result = await categoryModel.findByIdAndUpdate(id,{name_category});

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
    //Permite eliminar una categoria
    deletecategory: async (req,res) =>{
        try {
            const id = req.query.id;
        
            const result = await categoryModel.findByIdAndDelete(id);

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
    //Permite listar las categorias
    listcategories: async (req,res) =>{
        try {
            const categories = await categoryModel.find({});
            //const result = await categoryModel.find({}).count();

            if(categories){
                return res.status(200).json({
                    res: {
                        success: true,
                        data: categories,
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

module.exports = controllerCategory;