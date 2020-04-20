import * as React from 'react';
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
  transform translateX(${(props: ContainerProps) => (props.isTransition === 0 ? '0px' : '-274px')});

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
  line-height: 1.46;

  span {
    font-weight: bold;
  }
`;

const ClubComponent: React.FC<Props> = (props: Props) => {
  const {
    clubStatus, to, style, logo, content, top, bottom,
  } = props;

  const link = to.indexOf('http') === -1 ? <Link to={to}>JUMP TO</Link> : <a href={to}>JUMP TO</a>;
  return (
    <Container style={style} isTransition={clubStatus}>
      <img src={logo} alt="" />
      <Text
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ marginTop: top, marginBottom: bottom }}
      />
      {link}
    </Container>
  );
};

export default ClubComponent;
