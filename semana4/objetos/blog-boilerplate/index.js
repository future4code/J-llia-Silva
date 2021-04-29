
let postsCompletos = []

function criarClique() {


    const posts = document.getElementById("container-de-posts")

    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")
   

    posts.innerHTML += `<p> ${titulo.value} </p>`
    posts.innerHTML += `<p> ${autor.value} </p>`
    posts.innerHTML += `<p> ${conteudo.value} </p>`
   

    const post = {
        tituloPost: titulo.value,
        autorPost: autor.value,
        conteudoPost: conteudo.value,

    }

    postsCompletos.push(post)

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""

}
console.log(postsCompletos)

function criarEnter(event) {

    if (event.key === "Enter") {

        const posts = document.getElementById("container-de-posts")

        const titulo = document.getElementById("titulo")
        const autor = document.getElementById("autor")
        const conteudo = document.getElementById("conteudo")
     


        posts.innerHTML += `<p> ${titulo.value} </p>`
        posts.innerHTML += `<p> ${autor.value} </p>`
        posts.innerHTML += `<p> ${conteudo.value} </p>`

        const post = {
            tituloPost: titulo.value,
            autorPost: autor.value,
            conteudoPost: conteudo.value    
        }

        postsCompletos.push(post)

        titulo.value = ""
        autor.value = ""
        conteudo.value = ""

    }



}