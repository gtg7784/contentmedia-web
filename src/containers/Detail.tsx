import React from 'react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';

const Container = styled.div`
  min-width: 1440px;
  height: 100%;
  background: #f4f8fc;
`;


interface Props { 
  match: any;
}
interface State { }

class Detail extends React.Component<Props, State>{
  render(){
    const { type } = this.props.match.params;
    return(
      <Container>
        <HeaderComponent type={type} background="#fff"/>
      </Container>
    )
  }
}

export default Detail;