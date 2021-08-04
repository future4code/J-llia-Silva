import { Request, Response } from "express";
import SelectUserById from "../../data/selectUserById";

export default async function getUserById(
    req: Request,
    res: Response
) {
    try {
     
        const user = await SelectUserById(req.params.id)

     

        if (!user) {
            res
                .status(404)
                .send({ message: "Usuário Não Encontrado" })
                return
        }
     
        res
            .status(200)
            .send({
                message: "Sucesso",
                id: user.id,
                nickname: user.nickname
            })
    
    } catch (error) {
    res.status(400).send({
        message: error.message || error.sqlMessage
    })
}
}