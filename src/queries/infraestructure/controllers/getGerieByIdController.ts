import { Request, Response } from "express";
import { GetConsultaByIdService } from "../../application/service/getQuerieByIdService";

export class GetConsultaByIdController{
    constructor (private readonly getConsultaByIdService:GetConsultaByIdService){}
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const result = await this.getConsultaByIdService.run(id)
            res.status(200).send(result);
        }
        catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}