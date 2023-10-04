import { Request, Response } from 'express';

import { handleError } from '../errors/handle.error';
import SpecialistModel from '../models/specialist.model';

export default class SpecialistController {
  constructor() {}

  public async getAllSpecialists(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.find({});

        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
