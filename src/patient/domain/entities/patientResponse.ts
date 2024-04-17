export interface PacienteResponse{
    id_persona?:number;
    citas?: any[];
    nombres:string;
    apellidos:string;
    edad:number;
    altura:number;
    peso:number;
    genero:string;
}