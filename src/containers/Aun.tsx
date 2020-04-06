import React from 'react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props { };
interface State { };

class Aun extends React.Component<Props, State>{
  render(){
    return(
      <Container>
        <HeaderComponent background="#f4f8fc" />
      </Container>
    )
  }
}

export default Aun;