import * as React from 'react';
import styled from 'styled-components';

import QIcon from 'assets/QIcon.svg';
import AIcon from 'assets/AIcon.svg';

import Colors from 'constants/Colors';

const Container = styled.div`
  width: 236px;
  height: 242px;
  border-radius: 16px;
  box-shadow: 0 0 24px 0 rgba(136, 136, 136, 0.1);
  background-color: ${Colors.white};
  padding: 38px 22px 0px 22px;
  margin-left: 100px;
  margin-bottom: 40px;
`;
const QWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const QText = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #3f3d56;
  margin-top: 12px;
`;
const AWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 47px;
`;
const AText = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  color: #3f3d56;
  margin-top: 12px;
  line-height: 1.48;
`;

interface Props {
  question: string;
  answer: string;
  style?: Object;
}

const QnaComponent: React.FC<Props> = (props: Props) => {
  return(
    <Container style={props.style}>
      <QWrap>
        <img src={QIcon} alt=""/>
        <QText>{props.question}</QText>
      </QWrap>
      <AWrap>
        <img src={AIcon} alt=""/>
        <AText dangerouslySetInnerHTML={{ __html: props.answer }} />
      </AWrap>
    </Container>
  )
}

export default QnaComponent;