import React from 'react';
import styled from 'styled-components';
import schoolAward from 'assets/schoolAward.svg';
import suburbAward from 'assets/suburbAward.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 125px;
`;
const Title = styled.img`
  margin-bottom: 90px;
`;
const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 90px;
  box-shadow: 0 0 16px 0 rgba(34, 34, 34, 0.15);
  background-color: #f4f8fc;
`;

interface Props {
  title?: string;
  number: string;
}

const PrizeComponent: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Title src={props.title === "school" ? schoolAward : suburbAward} alt=""/>
      <Oval>
        <img src={props.number} alt=""/>
      </Oval>
    </Container>
  )
}

export default PrizeComponent;