import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg';

const Container = styled.header`
  width: calc(100% - 400px);
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
  background-color: ${(props: ContainerProps) => props.background};
`;
const Logo = styled.img`
  width: 70px;
  height: 40px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const Listitem = styled.li`
  float: left;
  margin-left: 64px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #888888;
`;

interface ContainerProps {
  background: string;
}

interface Props { 
  background: string;
}

const HeaderComponent: React.FC<Props> = (props: Props) => {
  return (
    <Container background={props.background} >
      <Logo src={logo} />
      <List>
        <Listitem>HOME</Listitem>
        <Listitem>MEMBERS</Listitem>
        <Listitem>QnA</Listitem>
      </List>
    </Container>
  )
}

export default HeaderComponent;