import { Request, Response } from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/user.model';
import { handleError } from '../errors/handle.error';
import BeautyPackageModel from '../models/beautyPackage.model';

export default class beautyPackageController {
  constructor() {}

  public async getAnBeautypackages(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const beautyPackages = await BeautyPackageModel.find({});

        res.status(200).json(beautyPackages);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
