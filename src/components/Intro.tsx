import React from 'react';
import styled from 'styled-components';

import introTypo from 'assets/intro-typo.svg'
import introIllust from 'assets/intro-illust.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 210px;
  width: calc(100% - 400px);
  padding: 0px 200px;
`;
const IntroTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: flex-start;
`;
const IntroTextTypo = styled.img`
  width: 314.9px;
  height: 62px;
  margin-bottom: 40px;
`;
const IntroText = styled.p`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: 0.4px;
  color: #3f3d56;
`;
const IntroSpan = styled.span`
  font-weight: 700;
`;
const IntroImage = styled.img`
  width: 509px;
  height: 274px;
`;

interface Props { }

const Intro: React.FC<Props> = () => {
  return (
    <Container>
      <IntroTextWrap>
        <IntroTextTypo src={introTypo} />
        <IntroText>
          <IntroSpan>2020년 선린인터넷고등학교 콘텐츠디자인과 </IntroSpan>
          동아리 시연회 제목은<br/>
          ‘stART’입니다. art를 시작한다는 뜻이며 신입생들에게는<br/>
          동아리 선택과 함께 학교생활이 시작된다는 의미입니다.<br/>
          <br/>
          작품에는 한 해 학교 생활을 하며 겪었던 고뇌와 걱정,<br/>
          미래를 생각하는 마음이 담겨있습니다.<br/>
          다방면에서 두각을 나타내는 디자이너가 되도록<br/>
          응원과 격려부탁드립니다.<br/>
        </IntroText>
      </IntroTextWrap>
      <IntroImage src={introIllust}/>
    </Container>
  )
}

export default Intro;