
import { ConsultaResponse } from "../../domian/entities/querieResponse";
import { ConsultaRepository } from "../../domian/repository/querieRepository";

export class GetConsultaByIdService{
    constructor(private readonly consultaRepository:ConsultaRepository){}
    async run(id_unico:string):Promise<ConsultaResponse>{
        try{
            const response = await this.consultaRepository.getConsultaById(id_unico)
           
                console.log(response)
                return response;
            
        }catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
}