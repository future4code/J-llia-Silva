import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {nomeUsuario:'paulinha',fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
      {nomeUsuario:'Júllia',fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
      {nomeUsuario:'Lucas', fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
    ]
  }
  render() {
    const componentesPost = this.state.posts.map((post)=>{
      return(
      <Post
        nomeUsuario =  {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
       />
       )
    })
    return (
      <div>

      <div>
      <input value = {this.state.valornomeUsuario}/>
      <input value = {this.state.valorfotoUsuario}/>
      <input value = {this.state.valorfotoPost}/>
      </div>

      <MainContainer>        
       {componentesPost}        
      </MainContainer>

      </div>
    )
  }
}

export default App;
