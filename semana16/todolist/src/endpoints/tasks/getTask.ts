import { Request, Response } from "express";
import selectTaskById from "../../data/selectTaskById";

export default async function getTask(
    req: Request,
    res: Response
) {
    try {

        const task = await selectTaskById(req.params.id)

        if (!task) {
            res
                .status(404)
                .send({ message: "Tarefa Não Encontrada" })
            return
        }


        res.status(200).send({
            message: "Sucesso!",
            title: task.title

        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}