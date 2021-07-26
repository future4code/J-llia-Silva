import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import createUser from './endpoints/users/createUser'
import getUserById from './endpoints/users/getUsers'
import editUser from './endpoints/users/editUser'
import createTask from './endpoints/tasks/createTask'
import getTask from './endpoints/tasks/getTask'

dotenv.config()

export const connection = knex({
client: 'mysql', 
connection:{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306
}

})

const app = express()
app.use(express.json())

app.post('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.post('/task', createTask)
app.get('/task/:id', getTask)

app.listen(3006, ()=>{
console.log("tudo ok")
})