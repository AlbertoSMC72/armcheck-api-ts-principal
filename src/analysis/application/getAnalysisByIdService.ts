import { AnalisisRepository } from "../domain/repository/analysisRepository";
import { AnalisisResponse } from "../domain/entities/analysisResponse";

export class GetAnalisisByIdService{
    constructor(private readonly analisiRepository:AnalisisRepository){}
    async run(id_unico:string):Promise<AnalisisResponse>{
        try{
            const response = await this.analisiRepository.getAnalisisById(id_unico)
           
                console.log(response)
                return response;
            
        }catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
}