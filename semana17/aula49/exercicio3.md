const page = Number(req.query.page) || 1 
const offset: number = size *(page-1);

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`SELECT id, name, email, typeFROM aula48_exercicio;`)
   .limit(5)
   .offset(offset)


   return result[0]
}