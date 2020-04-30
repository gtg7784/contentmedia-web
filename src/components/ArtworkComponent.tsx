import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyleType {
  index: number;
}

const Container = styled.div`
  width: 220px;
  height: 340px;
  display: flex;
  flex-direction: column;
  margin-left: ${(props: StyleType) => props.index%4 === 0 ? '0px': '56px'};
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
  line-height: 1.34;
`;

interface Props {
  img: string;
  title: string;
  type: string;
  description: string;
  index: number;
  name: string;
}

const ArtworkComponent: React.FC<Props> = (props: Props) => {
  const {
    name, index, title, type, img, description
  } = props;

  return (
    <Container index={index}>
      <Link to={`/detail/${name}/${index}`}>
        <Image src={img} />
        <Title>{title}</Title>
        <Type>{type}</Type>
        <Description>{description}</Description>
      </Link>
    </Container>
  );
};

export default ArtworkComponent;
