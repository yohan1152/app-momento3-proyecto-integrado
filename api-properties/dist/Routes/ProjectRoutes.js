'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserController = require('../Controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

var _PropertiesController = require('../Controllers/PropertiesController');

var _PropertiesController2 = _interopRequireDefault(_PropertiesController);

var _CategoryController = require('../Controllers/CategoryController');

var _CategoryController2 = _interopRequireDefault(_CategoryController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Routes user
router.get('/listusers', _UserController2.default.listusers);
router.get('/getuser', _UserController2.default.getuser);
router.get('/getuserexist', _UserController2.default.getuserexist);
router.post('/adduser', _UserController2.default.adduser);
router.put('/updateuser', _UserController2.default.updateuser);
router.delete('/deleteuser', _UserController2.default.deleteuser);
//Routes properties
router.get('/listproperties', _PropertiesController2.default.listproperties);
router.get('/getproperties', _PropertiesController2.default.getproperties);
router.post('/addproperty', _PropertiesController2.default.addproperty);
router.put('/updateproperty', _PropertiesController2.default.updateproperty);
router.delete('/deleteproperty', _PropertiesController2.default.deleteproperty);
router.get('/getpropertiesuser', _PropertiesController2.default.getpropertiesuser);
router.get('/getstoredproperties', _PropertiesController2.default.getstoredproperties);
//Routes categories
router.get('/listcategories', _CategoryController2.default.listcategories);
router.post('/addcategory', _CategoryController2.default.addcategory);
router.put('/updatecategory', _CategoryController2.default.updatecategory);
router.delete('/deletecategory', _CategoryController2.default.deletecategory);

module.exports = router;