import * as React from 'react';
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import GlobalStyles from 'globalStyles';

import data from 'data';

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

interface Props {
  AunStore?: ClubStoreType;
  JunrStore?: ClubStoreType;
  MirStore?: ClubStoreType
  TateStore?: ClubStoreType;
  VfriendsStore?: ClubStoreType;
}
interface State { }

@inject('AunStore', 'JunrStore', 'MirStore', 'TateStore', 'VfriendsStore')
@observer
class App extends React.Component<Props, State>{
  componentDidMount(){
    const { AunStore, JunrStore, MirStore, TateStore, VfriendsStore } = this.props;
    AunStore.updateData(data.aunData);
    JunrStore.updateData(data.junrData);
    MirStore.updateData(data.mirData);
    TateStore.updateData(data.tateData);
    VfriendsStore.updateData(data.vfriendsData);
  }

  render(){
    return (
      <Container>
        <GlobalStyles />
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/vfriends">
            <Vfriends/>
          </Route>
          <Route path="/aun">
            <Aun/>
          </Route>
          <Route path="/tate">
            <Tate/>
          </Route>
          <Route path="/junr">
            <Junr/>
          </Route>
          <Route path="/mir">
            <Mir/>
          </Route>
          <Route path="/detail/:type/:id">
            <Detail/>
          </Route>
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default hot(module)(App);
