"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const beautyPackage_controller_1 = __importDefault(require("../controllers/beautyPackage.controller"));
const beautyPackageRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const beautyPackageInstance = new beautyPackage_controller_1.default();
//get all beauty packages
beautyPackageRouter.get('/', beautyPackageInstance.getAnBeautypackages);
//get a beauty package
beautyPackageRouter.get('/:bid', beautyPackageInstance.getABeautypackage);
//create a beauty package
beautyPackageRouter.post('/', authInstance.isAuthenticated, authInstance.isAdmin, beautyPackageInstance.createABeautypackage);
//update a beauty package
beautyPackageRouter.put('/:bid', authInstance.isAuthenticated, authInstance.isAdmin, beautyPackageInstance.updateABeautypackage);
//delete a beauty package
beautyPackageRouter.delete('/:bid', authInstance.isAuthenticated, authInstance.isAdmin, beautyPackageInstance.deleteABeautypackage);
exports.default = beautyPackageRouter;
