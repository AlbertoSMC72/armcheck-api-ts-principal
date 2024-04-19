import { Analisis } from "../entities/analysis";

export interface AnalisisRepository{
    getAnalisis(): Promise<Analisis>
    getAnalisisById(id_unico:string):Promise<Analisis>
}