import React from 'react';
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from 'containers/Home';
import Notfound from 'containers/Notfound';
import GlobalStyles from 'globalStyles';

const Container = styled.div`
  width: 1440px;
  height: 100%;
  background: #f4f8fc;
`;

class App extends React.Component {
  render(){
    // console.log(globalStyles)
    return (
      <Container>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact component={Notfound} />
        </Switch>
      </Container>
    );
  }
}

export default hot(module)(App);
