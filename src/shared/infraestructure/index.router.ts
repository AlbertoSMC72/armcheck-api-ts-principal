import { Router, Request, Response } from "express";
import { especialistaRouter } from "../../specialist/infraestructure/specialist.router";
import {authRouter} from "../../auth/infraestructure/auth.router";
import pacienteRouter from "../../patient/infraestructure/patientRouter";
import consultaRouter from "../../queries/infraestructure/querieRouter";
import analisisRouter from "../../analysis/infraestructure/analysisRouter";
const prefijo = "/api";
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

indexRouter.use(`${prefijo}/paciente`, pacienteRouter)
indexRouter.use(`${prefijo}/especialistas`, especialistaRouter);
indexRouter.use(`${prefijo}/auth`, authRouter);
indexRouter.use(`${prefijo}/consulta`, consultaRouter)
indexRouter.use(`${prefijo}/analisis`, analisisRouter)



export default indexRouter;