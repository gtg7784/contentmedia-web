import * as React from 'react';
import styled from 'styled-components';

import LinkComponent from 'components/LinkComponent';
import AComponent from 'components/AComponent';

const Container = styled.div`
  width: 220px;
  height: 340px;
  display: flex;
  flex-direction: column;
  margin-left: 56px;
  margin-bottom: 60px;
  a {
    text-decoration: none;
  }
`;
const Image = styled.img`
  width: 220px;
  height: 220px;
`;
const Title = styled.p`
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: #222222;
`;
const Type = styled.p`
  margin: 8px 0px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: #888888;
`;
const Description = styled.p`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #3f3d56;
`;

interface Props {
  img: string;
  title: string;
  type: string;
  description: string;
  index: number;
  name: string;
  style?: Object;
  link?: string;
}

const ArtworkComponent: React.FC<Props> = (props: Props) => {
  const child = (
    <React.Fragment>
      <Image src={props.img}/>
      <Title>{props.title}</Title>
      <Type>{props.type}</Type>
      <Description>{props.description}</Description>
    </React.Fragment>
  );

  let Child;
  if(props.link === undefined){
    Child = <LinkComponent name={props.name} index={props.index} child={child}/>;
  } else {
    Child = <AComponent link={props.link} child={child}/>;
  }
  return (
    <Container style={props.style}>
      {Child}
    </Container>
  )
}

export default ArtworkComponent;