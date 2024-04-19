import { MySQlRepositoryAnalisis } from "./DB/mysqlRepository";
import { GetAnalisisService } from "../application/getAnalysisService";
import { GetAnalisisController } from "./controllers/getAnalysisController";
import { GetAnalisisByIdService } from "../application/getAnalysisByIdService";
import { GetAnalisiByIdController } from "./controllers/getAnalysisByIdController";


const mysqlRepository = new MySQlRepositoryAnalisis;

const getAnalisisService = new GetAnalisisService(mysqlRepository)
const getAnalisisByIdService = new GetAnalisisByIdService(mysqlRepository) 

export const getAnalisisController = new GetAnalisisController(getAnalisisService);
export const getAnalisisByIdController = new GetAnalisiByIdController(getAnalisisByIdService);