
###
a) const name - req.query.name || %
b) const type - req.params.type || %

 export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`SELECT id, name, email, type FROM aula48_exercicio;`)
   .where("name", "LIKE", `%${name}%`)
   .where("type", "LIKE", `%${type}%`)
   

   return result[0]
}