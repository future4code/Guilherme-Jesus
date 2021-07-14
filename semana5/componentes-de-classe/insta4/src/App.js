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
          nomeUsuario={'Mr.Crowley'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Guilherme'}
          fotoUsuario={'https://picsum.photos/id/1005/5760/3840'}
          fotoPost={'https://picsum.photos/id/1022/367/267'}
        />
        <Post
          nomeUsuario={'James'}
          fotoUsuario={'https://picsum.photos/id/1025/4951/3301'}
          fotoPost={'https://picsum.photos/id/1025/367/267'}
        />
      </MainContainer>
    );
  }
}

export default App;
