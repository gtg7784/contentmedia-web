import * as React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg';
import vfriendsLogo from 'assets/vfriendsLogoWhite.svg';
import tateLogo from 'assets/tateLogo.svg';
import mirLogo from 'assets/mirLogo.svg';
import aunLogo from 'assets/aunLogo.svg';
import junrLogo from 'assets/junrLogoWhite.svg';

const Container = styled.header`
  width: calc(100% - 400px);
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
  background-color: ${(props: ContainerProps) => props.background};
`;
const Logo = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const Listitem = styled.li`
  float: left;
  margin-left: 64px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #888888;
`;

type assets = undefined | 'vfriends' | 'tate' | 'mir' | 'aun' | 'junr' | 'default';

interface ContainerProps {
  background: string;
}

interface clubType {
  menu: Array<string>;
  image: string;
}

interface Props { 
  background: string;
  type?: assets;
  width?: string;
  height?: string
}

const getAsset = (type: assets): clubType => {
  const asset = {
    vfriends: {
      image: vfriendsLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"]
    },
    tate: {
      image: tateLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"]
    },
    mir: {
      image: mirLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"]
    },
    aun: {
      image: aunLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"]
    },
    junr: {
      image: junrLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"]
    },
    default: {
      image: logo,
      menu: ["HOME", "MEMBERS", "QnA"]
    }
  };

  if(type === undefined){
    return asset['default'];
  }

  return asset[type];
}

const HeaderComponent: React.FC<Props> = ({background, type, width="70px", height="40px"}: Props) => {
  const asset = getAsset(type);

  return (
    <Container background={background} >
      <Logo src={asset.image} width={width} height={height}/>
      <List>
        {asset.menu.map((item, index) => (
          <Listitem key={index}>{item}</Listitem>
        ))}
      </List>
    </Container>
  )
}

export default HeaderComponent;