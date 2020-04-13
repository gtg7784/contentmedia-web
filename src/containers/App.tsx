import * as React from 'react';
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { observer, Provider } from 'mobx-react';

import GlobalStyles from 'globalStyles';
import stores from 'stores';

import Home from 'containers/Home';
import Notfound from 'containers/Notfound';
import Vfriends from './Vfriends';
import Aun from './Aun';
import Tate from './Tate';
import Junr from './Junr';
import Mir from './Mir';
import Detail from './Detail';

const Container = styled.div`
  min-width: 1440px;
  height: 100%;
  background: #f4f8fc;
`;

@observer
class App extends React.Component {
  render(){
    return (
      <Provider {...stores}>
        <Container>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vfriends" exact component={Vfriends} />
            <Route path="/aun" exact component={Aun} />
            <Route path="/tate" exact component={Tate}/>
            <Route path="/junr" exact component={Junr} />
            <Route path="/mir" exact component={Mir} />
            <Route path="/detail/:type/:id" exact component={Detail}/>
            <Route exact component={Notfound} />
          </Switch>
        </Container>
      </Provider>
    );
  }
}

export default hot(module)(App);
