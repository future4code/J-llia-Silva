import { Request, Response } from "express";
import upDateUser from "../../data/upDateUser";

export default async function editUser(
    req: Request,
    res: Response
) {
    try {
    
        if (
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
        ) {
            res.status(400).send({
                message: "nenhum dos campos pode estar em branco"
            })
            return
        }
        if (
           !req.body.name &&
           !req.body.nickname &&
           !req.body.email 
        ){
            res.status(400).send({
                message: "Mude pelo menos um valor"
            })
            return
        }
    

        await upDateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email

        )
    
        res.status(200).send({
            message: "Dados atualizados"
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}