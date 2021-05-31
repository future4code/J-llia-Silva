import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
    const [curtida, setCurtida] = useState(false)
    const [numeroCurtidas, setNumeroCurtidas] = useState(0)
    const [comentarios, setComentarios] = useState(false)
    const [numeroComentario, setNumeroComentario] = useState(0)
    const [listaComentario, setListaComentario] = useState([])


    const onClickCurtida = () => {
        if (curtida) {
            setCurtida(!curtida)
            setNumeroCurtidas(numeroCurtidas - 1)
        }
        else {
            setCurtida(!curtida)
            setNumeroCurtidas(numeroCurtidas + 1)
        }
    }
    const numeroComentarios = () => {
        setNumeroComentario(numeroComentario + 1)
    }

    const onClickComentario = () => {
        setComentarios(!comentarios)
    }

    const enviarComentario = (comentario) => {
        setListaComentario([...listaComentario, comentario])
    }
    const listaMapeada = listaComentario.map((com) => {
        return <ul>{com}</ul>
    })
    const iconeCurtida = curtida ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
    const caixaDeComentario = comentarios && (<SecaoComentario enviarComentario={enviarComentario} listaMapeada={listaMapeada} />)

    return (
        <PostContainer>
            <PostHeader>
                <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
                <p>{props.nomeUsuario}</p>
            </PostHeader>

            <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

            <PostFooter>
                <IconeComContador
                    icone={iconeCurtida}
                    onClickIcone={onClickCurtida}
                    valorContador={numeroCurtidas}
                />

                <IconeComContador
                    icone={iconeComentario}
                    onClickIcone={onClickComentario}
                    valorContador={numeroComentarios}
                />
            </PostFooter>
            {caixaDeComentario}
        </PostContainer>
    )
}

export default Post