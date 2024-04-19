import { Request, Response } from "express";
import { GetAnalisisByIdService } from "../../application/getAnalysisByIdService";

export class GetAnalisiByIdController{
    constructor (private readonly getAnalisisByIdService:GetAnalisisByIdService){}
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const result = await this.getAnalisisByIdService.run(id)
            res.status(200).send(result);
        }
        catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}