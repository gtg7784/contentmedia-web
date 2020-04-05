import React from 'react';
import styled from 'styled-components';

import sunrinIcon from 'assets/sunrinIcon.svg';

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
`;
interface Props { }

const FooterComponent: React.FC<Props> = () => {
  return(
    <Container>
      <img src={sunrinIcon} alt=""/>
    </Container>
  )
}

export default FooterComponent;