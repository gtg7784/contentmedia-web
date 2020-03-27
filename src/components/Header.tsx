import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg';

// import logo from ''

const Container = styled.header`
  width: calc(100% - 400px);
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
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
  font-family: 'Noto Sans KR', sans-serif;
`;

interface Props { 
  background: string;
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Container style={{ background: props.background}}>
      <Logo src={logo} />
      <List>
        <Listitem>HOME</Listitem>
        <Listitem>MEMBERS</Listitem>
        <Listitem>Q&A</Listitem>
      </List>
    </Container>
  )
}

export default Header;