import React from 'react';
import { hot } from 'react-hot-loader'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f4f8fc;
`;

class App extends React.Component {
  render(){
    return (
      <Container>

      </Container>
    );
  }
}

export default hot(module)(App);
