import { Request, Response } from "express";
import { GetAnalisisService } from "../../application/getAnalysisService";

export class GetAnalisisController{
    constructor(private readonly getAnalisiService: GetAnalisisService){}
    async run(req: Request, res: Response) {
        try {
          const result = await this.getAnalisiService.run();
          res.status(200).send(result);
        } catch (err: any) {
          return res.status(500).send(err.message);
        }
      }
    }