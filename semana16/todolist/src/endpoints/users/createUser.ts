import { Request, Response } from "express";
import { insertUsers } from "../../data/insertUser";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) {
            res
                .status(400)
                .send("preencha todos os campos")
                return
        }
        
        const id: string = Date.now() + Math.random().toString()//isso gera um numero aleatorio pro id

        await insertUsers(
            id, 
            req.body.name,
            req.body.nickname,
            req.body.email
        )

       
        res
                .status(200)
                .send("Usuário criado com sucesso")


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}