import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Colors from 'constants/Colors';

interface Props {
  to: string;
  content: string;
  logo: string;
  style?: Object;
  top: number;
  bottom: number;
  clubStatus: number;
}

interface ContainerProps {
  isTransition: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 294px;
  border-radius: 16px;
  box-shadow: 0 0 24px 0 rgba(136, 136, 136, 0.1);
  background-color: ${Colors.white};
  z-index: 1000;
  margin-left: 66px;
  margin-bottom: 80px;
  transition: 1s;
  transform translateX(${(props: ContainerProps) => props.isTransition === 0 ? "0px" : "-274px"});

  a{
    width: 144px;
    height: 36px;
    border-radius: 18px;
    border: solid 2px #3581d7;
    display: flex;
    flex-derecion: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: 'Bebas Neue', cursive;
    font-size: 17px;
    letter-spacing: 1.1px;
    color: #3581d7;
  }
`;
const Text = styled.div`
  font-size: 10px;
  font-weight: normal;
  text-align: center;
  color: #3f3d56;

  span {
    font-weight: bold;
  }
`;

const ClubComponent: React.FC<Props> = (props: Props) => {
  const { clubStatus } = props;

  const link = props.to.indexOf('http') === -1 ? <Link to={props.to}>JUMP TO</Link> : <a href={props.to}>JUMP TO</a>
  return (
    <Container style={props.style} isTransition={clubStatus}>
      <img src={props.logo} alt=""/>
      <Text dangerouslySetInnerHTML={{ __html: props.content }} style={{ marginTop: props.top, marginBottom: props.bottom }} />
      {link}
    </Container>
  )
}

export default ClubComponent;