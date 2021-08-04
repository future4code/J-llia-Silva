import { connection } from "..";

export async function insertUsers(
    id: String,
    name: String,
    nickname: String,
    email: String
) {
await connection.insert({
    id,
    name,
    nickname,
    email 

}).into('to_do_list_users')
}