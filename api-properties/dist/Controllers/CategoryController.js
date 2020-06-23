"use strict";

var _CategoryModel = require("../Models/CategoryModel");

var _CategoryModel2 = _interopRequireDefault(_CategoryModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerCategory = {
    addcategory: async function addcategory(req, res) {
        var name_category = req.body.name_category;

        var newCategory = new _CategoryModel2.default({ name_category: name_category });

        var result = await newCategory.save();

        if (result) {
            return res.status(200).json({
                response: "Successfully added category."
            });
        } else {
            return res.status(404).json({
                response: "The category could not be added."
            });
        }
    },
    listcategories: async function listcategories(req, res) {
        var categories = await _CategoryModel2.default.find({});

        var result = await _CategoryModel2.default.find({}).count();
        if (result > 0) {
            return res.status(200).json({ categories: categories });
        } else {
            return res.status(404).json({
                response: "No registered categories."
            });
        }
    }
};

module.exports = controllerCategory;