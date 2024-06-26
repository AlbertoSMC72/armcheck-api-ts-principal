import { Consulta } from "../entities/querie";

export interface ConsultaRepository{
    postConsulta(consulta: Consulta): Promise<Consulta>
    getConsultaById(id_unico:string):Promise<Consulta>
}