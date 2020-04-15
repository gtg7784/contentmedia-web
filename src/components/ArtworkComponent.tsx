import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

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
  detail?: DetailType;
  DetailStore?: any;
}
interface State { }

@observer
@inject('DetailStore')
class ArtworkComponent extends React.Component<Props, State> {
  render(){
    const { link, name, index, title, type, img, description, style, DetailStore } = this.props;
    let child;
    if(link === undefined){
      child = (
        <Link to={`/detail/${name}/${index}`}>
          <Image src={img}/>
          <Title>{title}</Title>
          <Type>{type}</Type>
          <Description>{description}</Description>
        </Link>
      );
    } else {
      child = (
        <a href={link}>
          <Image src={img}/>
          <Title>{title}</Title>
          <Type>{type}</Type>
          <Description>{description}</Description>
        </a>
      );
    }
  
    const data: DetailType = {
      images: [img],
      profile: {
        name: "",
        email: "",
        description: description
      },
      type: name
    }

    return (
      <Container style={style} onClick={() => DetailStore.update(data)}>
        {child}
      </Container>
    )
  }
}

export default ArtworkComponent;