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
  DetailStore: DetailStoreType;
  match: {
    params: {
      type: clubs;
    }
  };
}
interface State {}

@observer
@inject('DetailStore')
class Detail extends React.Component<Props, State>{
  render(){
    const { match: { params: { type }}} = this.props;
    return(
      <Container>
        <HeaderComponent type={type}/>
      </Container>
    )
  }
}

export default Detail;