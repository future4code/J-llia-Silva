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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      <Post
        nomeUsuario={'Júllia'}
        fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4E03AQEPxgwEBeAfVQ/profile-displayphoto-shrink_100_100/0/1617191328014?e=1625702400&v=beta&t=rvPucAmTT8wEGcTlqCH3U0ZNS-T7Gs4F2I6hgieCVE4'}
        fotoPost={'https://media-exp1.licdn.com/dms/image/sync/C4E27AQGDkPtl86UfqA/articleshare-shrink_800/0/1620217367657?e=1620320400&v=beta&t=DoS9_xu7E3elSKKYgBvs16nd2ulg096dFA-QHYSSDqU'}
      />
    
    <Post
      nomeUsuario={'Lucas'}
      fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4E03AQENvZHM75HhJQ/profile-displayphoto-shrink_200_200/0/1618064936592?e=1625702400&v=beta&t=-NJ0sxsypnIi3JRrO8WQE6TT2ZzZmJ7l0EwxLtbh1Eg'}
      fotoPost={'https://media-exp1.licdn.com/dms/image/sync/C4D18AQEL7Kbu3Z4i_A/companyUpdate-article-image-shrink_627_1200/0/1617816629561?e=1623283200&v=beta&t=e0mab22ErNaGwMmXajrNkbxkgMbrNtx93ucECKGejLA'}
    />
  </MainContainer>
    );
  }
}

export default App;
