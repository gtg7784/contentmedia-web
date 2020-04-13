import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';

const Container = styled.div`
  min-width: 1440px;
  height: 100%;
  background: #f4f8fc;
`;


interface Props { 
  DetailStore: any;
}
interface State {}

@inject('DetailStore')
@observer
class Detail extends React.Component<Props, State>{
  render(){
    const { data } = this.props.DetailStore;
    console.log(data);
    return(
      <Container>
        <HeaderComponent/>
      </Container>
    )
  }
}

export default Detail;