
const order = req.query.name || req.query.type === "DESC"? "DESC" : "ASC"
const sort = req.query.sort === "email"? "email" : "created_at"

 export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`SELECT id, name, email, type FROM aula48_exercicio;`)  .orderBy(sort, order)

   return result[0]
}