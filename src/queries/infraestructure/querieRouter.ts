import { Router } from "express";

import { postConsultaController } from "./dependenciesQuerie";
import { getConsultaByIdController } from "./dependenciesQuerie";

const consultaRouter = Router();

consultaRouter
.get('/:id', async (req,res)=>{
    await getConsultaByIdController.run(req,res)
})
.post('/', async (req, res) => {
    await postConsultaController.run(req, res);
})

export default consultaRouter;
