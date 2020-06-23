"use strict";

var _UserModel = require("../Models/UserModel");

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerUser = {
    //Permite buscar un usuario en la BD
    getuser: async function getuser(req, res) {
        var _req$body = req.body,
            email = _req$body.email,
            password = _req$body.password;


        var userlogin = await _UserModel2.default.find({ email: email, password: password });
        var result = await _UserModel2.default.find({ email: email, password: password }).count();

        if (result > 0) {
            return res.status(200).json({ message: "User validator..." });
        } else {
            return res.status(404).json({
                response: "incorrect User and/or password."
            });
        }
    },
    //Permite registrar un nuevo usuario
    adduser: async function adduser(req, res) {
        var _req$body2 = req.body,
            name = _req$body2.name,
            last_name = _req$body2.last_name,
            email = _req$body2.email,
            password = _req$body2.password;

        var newUser = new _UserModel2.default({ name: name, last_name: last_name, email: email, password: password });

        var result = await newUser.save();

        if (result) {
            return res.status(200).json({
                response: "Successfully added user."
            });
        } else {
            return res.status(404).json({
                response: "The user could not be added."
            });
        }
    },
    listusers: async function listusers(req, res) {
        var users = await _UserModel2.default.find({});

        var result = await _UserModel2.default.find({}).count();
        if (result > 0) {
            return res.status(200).json({ users: users });
        } else {
            return res.status(404).json({
                response: "No registered users."
            });
        }
    }
};

module.exports = controllerUser;