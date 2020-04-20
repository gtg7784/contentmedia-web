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

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #888888;
  }
`;

interface ContainerProps {
  background: string;
}

interface Menu {
  text: string;
  id: string;
}

interface clubType {
  menu: Array<Menu>;
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
      menu: [
        {
          text: 'HOME',
          id: '#home',
        },
        {
          text: 'INTRODUCE',
          id: '#intro',
        },
        {
          text: 'ACTIVITIES',
          id: '#activity',
        },
        {
          text: 'ARTWORKS',
          id: '#artworks',
        },
      ],
      width: '140px',
      height: '37px',
      background: '#222222',
    },
    tate: {
      image: tateLogo,
      menu: [
        {
          text: 'HOME',
          id: '#home',
        },
        {
          text: 'INTRODUCE',
          id: '#intro',
        },
        {
          text: 'ACTIVITIES',
          id: '#activity',
        },
        {
          text: 'ARTWORKS',
          id: '#artworks',
        },
      ],
      width: '68px',
      height: '68px',
      background: '#f4f8fc',
    },
    mir: {
      image: mirLogo,
      menu: [
        {
          text: 'HOME',
          id: '#home',
        },
        {
          text: 'INTRODUCE',
          id: '#intro',
        },
        {
          text: 'ACTIVITIES',
          id: '#activity',
        },
        {
          text: 'ARTWORKS',
          id: '#artworks',
        },
      ],
      width: '80px',
      height: '80px',
      background: '#f4f8fc',
    },
    aun: {
      image: aunLogo,
      menu: [
        {
          text: 'HOME',
          id: '#home',
        },
        {
          text: 'INTRODUCE',
          id: '#intro',
        },
        {
          text: 'MEMBERS',
          id: '#member',
        },
        {
          text: 'ARTWORKS',
          id: '#artworks',
        },
      ],
      width: '110px',
      height: '52px',
      background: '#f4f8fc',
    },
    junr: {
      image: junrLogo,
      menu: [
        {
          text: 'HOME',
          id: '#home',
        },
        {
          text: 'INTRODUCE',
          id: '#intro',
        },
        {
          text: 'ACTIVITIES',
          id: '#activity',
        },
        {
          text: 'ARTWORKS',
          id: '#artworks',
        },
      ],
      width: '82px',
      height: '80px',
      background: '#222222',
    },
    default: {
      image: logo,
      menu: [
        {
          text: 'HOME',
          id: '#home',
        },
        {
          text: 'MEMBERS',
          id: '#members',
        },
        {
          text: 'QnA',
          id: '#qna',
        },
      ],
      width: '70px',
      height: '40px',
      background: '#ffffff',
    },
  };

  if (type === undefined) {
    return asset.default;
  }

  return asset[type];
};

const HeaderComponent: React.FC<Props> = (props: Props) => {
  const { type } = props;
  const asset = getAsset(type);

  return (
    <Container background={asset.background}>
      <Logo src={asset.image} width={asset.width} height={asset.height} />
      <List>
        {asset.menu.map((item, index) => (
          <Listitem key={index}>
            <a href={item.id}>{item.text}</a>
          </Listitem>
        ))}
      </List>
    </Container>
  );
};

export default HeaderComponent;
