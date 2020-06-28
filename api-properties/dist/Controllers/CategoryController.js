'use strict';

var _CategoryModel = require('../Models/CategoryModel');

var _CategoryModel2 = _interopRequireDefault(_CategoryModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerCategory = {
    //Permite agregar una nueva categoria
    addcategory: async function addcategory(req, res) {
        try {
            var name_category = req.body.name_category;


            var newCategory = new _CategoryModel2.default({ name_category: name_category });
            var result = await newCategory.save();

            if (result) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error: {
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
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite actualizar una categoria
    updatecategory: async function updatecategory(req, res) {
        try {
            var _req$body = req.body,
                id = _req$body.id,
                name_category = _req$body.name_category;

            var result = await _CategoryModel2.default.findByIdAndUpdate(id, { name_category: name_category });

            if (result) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error: {
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
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite eliminar una categoria
    deletecategory: async function deletecategory(req, res) {
        try {
            var id = req.query.id;

            var result = await _CategoryModel2.default.findByIdAndDelete(id);

            if (result) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: [],
                        error: {
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
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    },
    //Permite listar las categorias
    listcategories: async function listcategories(req, res) {
        try {
            var categories = await _CategoryModel2.default.find({});
            //const result = await categoryModel.find({}).count();

            if (categories) {
                return res.status(200).json({
                    res: {
                        success: true,
                        data: categories,
                        error: {
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
                    error: {
                        title: e.name,
                        message: e.message
                    }
                }
            });
        }
    }
};

module.exports = controllerCategory;