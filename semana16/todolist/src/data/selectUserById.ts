import { connection } from ".."

export default async function SelectUserById(id: string) {
    const result = await connection('to_do_list_users')
        .select('*')
        .where({ id })
    return result[0]
}