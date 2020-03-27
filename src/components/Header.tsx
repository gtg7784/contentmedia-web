import React from 'react';
import styled from 'styled-components';

// import logo from ''

interface Props { 
  background: string;
}

const Container = styled.header`
  width: 100%;
  height: 150px;
`;
const Logo = styled.img`

`;

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Container style={{ background: props.background}}>
      <Logo/>
    </Container>
  )
}

export default Header;