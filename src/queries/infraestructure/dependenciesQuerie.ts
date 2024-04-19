import { PostConsultaService } from "../application/service/querieService";
import { PostConsultaController } from "./controllers/querieController";
import { MySQlRepositoryConsulta } from "./DB/mysqlRepository";
import { GetConsultaByIdService } from "../application/service/getQuerieByIdService";
import { GetConsultaByIdController } from "./controllers/getGerieByIdController";


const mysqlRepository = new MySQlRepositoryConsulta;

const postConsultaService = new PostConsultaService(mysqlRepository)
const getConsultaByIdService = new GetConsultaByIdService(mysqlRepository)

export const postConsultaController = new PostConsultaController(postConsultaService);
export const getConsultaByIdController = new GetConsultaByIdController(getConsultaByIdService);
