import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';

import illust from 'assets/notfound-illust.svg';
import homeTypo from 'assets/notfound-home.svg';
import backTypo from 'assets/notfound-back.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  @media(max-width: 426px){
    min-height: 9999px;
  }
`;
const Illust = styled.img`
  width: 340px;
  height: 185px;
  margin-top: 140px;
`;
const Title = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-size: 30px;
  letter-spacing: 2.2px;
  text-align: center;
  color: #2f2e41;
  margin-top: 24px;
`;
const Description = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #2f2e41;
  margin-top: 20px;
`;
const ButtonWrap = styled.div`
  margin-top: 24px;

`;
const Home = styled.button`
  width: 240px;
  height: 64px;
  border-radius: 32px;
  background-color: #3581d7;
  border solid 1px #3581d7;
  margin: 0px 12px;
`;
const Back = styled.button`
  width: 240px;
  height: 64px;
  border-radius: 32px;
  border: solid 1px #2f2e41;
`;

interface Props { }

const Notfound: React.FC<Props> = () => {
  return (
    <Container>
      <Header background="#fff" />

      <Illust src={illust} />
      <Title>404 NOT FOUND!</Title>
      <Description>
        페이지를 찾을 수 없습니다<br/>
        요청하신 작업을 다시 실행해주세요
      </Description>
      <ButtonWrap>
        <Home>
          <img src={homeTypo} alt=""/>
        </Home>
        <Back>
          <img src={backTypo} alt=""/>
        </Back>
      </ButtonWrap>
    </Container>
  )
}

export default Notfound;