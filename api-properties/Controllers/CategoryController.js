import categoryModel from '../Models/CategoryModel';

let controllerCategory = {
    addcategory: async (req, res) =>{
        const {name_category} = req.body;
        const newCategory = new categoryModel({name_category});
        
        const result = await newCategory.save();

        if(result){
            return res.status(200).json({
                response: "Successfully added category."
            });
        }else{
            return res.status(404).json({
                response: "The category could not be added."
            });
        }
    },
    listcategories: async (req,res) =>{
        const categories = await categoryModel.find({});

        const result = await categoryModel.find({}).count();
        if(result > 0){
            return res.status(200).json({categories});
        }else{
            return res.status(404).json({
                response: "No registered categories."
            });
        }
    },
}

module.exports = controllerCategory;