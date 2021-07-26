export const vaiPraLogin = (history)=>{
    history.push("/")
}
export const vaiPraCadastro = (history)=>{
    history.push("/cadastro")
}
export const vaiPraDetalhes = (history, id)=>{
    history.push(`/post/${id}`)
}
export const vaiPraFeed = (history)=>{
    history.push("/feed")
}
export const volta = (history)=>{
    history.goBack()
}