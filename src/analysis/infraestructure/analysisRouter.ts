import { Router } from "express";

import { getAnalisisController } from "./dependenciesAnalysis";
import { getAnalisisByIdController } from "./dependenciesAnalysis";

const analisisRouter = Router();

analisisRouter
    .get('/', async (req, res) => {
        await getAnalisisController.run(req, res);
    })
    .get('/:id', async (req, res) => {
        await getAnalisisByIdController.run(req, res);
    })

    export default analisisRouter;