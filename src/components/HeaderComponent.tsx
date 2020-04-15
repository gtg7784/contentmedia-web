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

interface ContainerProps {
  background: string;
}

interface clubType {
  menu: Array<string>;
  image: string;
  width: string;
  height: string;
  background: string;
}

interface Props { 
  type?: clubs;
}

const getAsset = (type: clubs): clubType => {
  const asset = {
    vfriends: {
      image: vfriendsLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"],
      width: "140px",
      height: "37px",
      background: "#222222"
    },
    tate: {
      image: tateLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"],
      width: "68px",
      height: "68px",
      background: "#f4f8fc"
    },
    mir: {
      image: mirLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"],
      width: "80px",
      height: "80px",
      background: "#f4f8fc"
    },
    aun: {
      image: aunLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"],
      width: "110px",
      height: "52px",
      background: "#f4f8fc"
    },
    junr: {
      image: junrLogo,
      menu: ["HOME", "INTRODUCE", "ACTIVITIES", "ARTWORKS"],
      width: "82px",
      height: "80px",
      background: "#222222"
    },
    default: {
      image: logo,
      menu: ["HOME", "MEMBERS", "QnA"],
      width: "70px",
      height: "40px",
      background: "#ffffff"
    }
  };

  if(type === undefined){
    return asset['default'];
  }

  return asset[type];
}

const HeaderComponent: React.FC<Props> = (props: Props) => {
  const asset = getAsset(props.type);

  return (
    <Container background={asset.background} >
      <Logo src={asset.image} width={asset.width} height={asset.height}/>
      <List>
        {asset.menu.map((item, index) => (
          <Listitem key={index}>{item}</Listitem>
        ))}
      </List>
    </Container>
  )
}

export default HeaderComponent;