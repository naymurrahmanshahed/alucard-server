"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handle_error_1 = require("../errors/handle.error");
const beautyPackage_model_1 = __importDefault(require("../models/beautyPackage.model"));
const mongoose_1 = __importDefault(require("mongoose"));
class beautyPackageController {
    constructor() { }
    async getAnBeautypackages(req, res) {
        try {
            await Promise.resolve().then(async () => {
                const beautyPackages = await beautyPackage_model_1.default.find({});
                res.status(200).json(beautyPackages);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    async getABeautypackage(req, res) {
        try {
            const { bid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            await Promise.resolve().then(async () => {
                const beautyPackages = await beautyPackage_model_1.default.findById(bid);
                res.status(200).json(beautyPackages);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    async createABeautypackage(req, res) {
        try {
            const { title, description, category, images, price } = req.body;
            await Promise.resolve().then(async () => {
                const beautyPackages = await beautyPackage_model_1.default.create({
                    title,
                    description,
                    category,
                    images,
                    price,
                });
                res.status(200).json(beautyPackages);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    async updateABeautypackage(req, res) {
        try {
            const { title, desciption, category, images, price } = req.body;
            const { bid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            await Promise.resolve().then(async () => {
                const beautyPackages = await beautyPackage_model_1.default.findByIdAndUpdate(bid, {
                    title,
                    desciption,
                    category,
                    images,
                    price,
                }, {
                    new: true,
                });
                res.status(200).json(beautyPackages);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
    async deleteABeautypackage(req, res) {
        try {
            const { bid } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(bid)) {
                res.status(404).json({ message: 'Beauty Package not found' });
            }
            await Promise.resolve().then(async () => {
                const beautyPackages = await beautyPackage_model_1.default.findByIdAndDelete(bid);
                res.status(200).json(beautyPackages);
            });
        }
        catch (error) {
            await (0, handle_error_1.handleError)(error, res);
        }
    }
}
exports.default = beautyPackageController;
