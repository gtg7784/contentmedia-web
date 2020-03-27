import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Intro from 'components/Intro';

import scrollDown from 'assets/scrolldown.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  height: 100%;
  background: #f4f8fc;
`;
const ScrollDownWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
`;
const ScrollDownText = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-family: 'Bebas Neue', cursive;
  color: #3581d7;
`;
const ScrollDownImage = styled.img`
  width: 48px;
  height: 24px;
  margin-top: 18px;
`;


interface Props { }
interface State { }
class Home extends React.Component<Props, State>{
  render(){
    return(
      <Container>
        <Header background="#ffffff" />
        <Intro/>
        <ScrollDownWrap>
          <ScrollDownText>SCROLL DOWN</ScrollDownText>
          <ScrollDownImage src={scrollDown}/>
        </ScrollDownWrap>
        <div style={{ height: 1000}}/>
      </Container>
    )
  }
}

export default Home;