import { connection } from "..";

export default async function insertTask(
    id: String,
    title: String,
    description: String,
    deadline: string,
    authorId: String
) {
    await connection('to_do_list_tacks')
    .insert({
        id,
        title,
        description,
        deadline,
        author_id: authorId

    })
}