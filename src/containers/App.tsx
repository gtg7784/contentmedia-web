import * as React from 'react';
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from 'globalStyles';

import Home from 'containers/Home';
import Notfound from 'containers/Notfound';
import Vfriends from './Vfriends';
import Aun from './Aun';
import Tate from './Tate';
import Junr from './Junr';
import Mir from './Mir';

const Container = styled.div`
  width: 1440px;
  height: 100%;
  background: #f4f8fc;
`;

class App extends React.Component {
  render(){
    return (
      <Container>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vfriends" exact component={Vfriends} />
          <Route path="/aun" exact component={Aun} />
          <Route path="/tate" exact component={Tate}/>
          <Route path="/junr" exact component={Junr} />
          <Route path="/mir" exact component={Mir} />
          <Route exact component={Notfound} />
        </Switch>
      </Container>
    );
  }
}

export default hot(module)(App);
