# Exercício 1

A) 
B) A query ficou assim: 

const getActorByName = async (name: string): Promise<any> => {
  const result = await conection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
}

app.get("/users/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name
  
      console.log(await getActorByName(name))
  
      res.end()
    } catch (error) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
})

###
C) 

const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT (*) FROM Actor WHERE gender = "${gender}"
  `);
	
  const count = result[0][0].count;
  return count;
};

#Exercício 2
A)
B)
C)
