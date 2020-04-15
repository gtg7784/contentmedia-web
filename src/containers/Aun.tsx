import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';
import ArtworkComponent from 'components/ArtworkComponent';

import aunBanner from 'assets/aun/Banner.png';
import aunLogo from 'assets/aunLogo.svg';
import artwork1 from 'assets/aun/artwork1.png';
import artwork2 from 'assets/aun/artwork2.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Banner = styled.img`
  min-width: 1440px;
  height: 874px;
  margin-bottom: 64px;
`;
const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2.6px;
  color: #3f3d56;
`;
const Logo = styled.img`
  width: 260px;
  height: 123px;
  margin-top: 125px;
`;
const Description = styled.p`
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-align: center;
  color: #3f3d56;
  margin-top: 94px;
  margin-bottom: 270px;
`;
const MemberWrap = styled.div`
  width: 100%;
  height: 512px;
  background-color: #ff703e;
  margin-top: 156px;
  margin-bottom: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ArtworkWrap = styled.div`
  width: 1054px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 80px;
`;

interface Artwork {
  img: string;
  title: string;
  type: string;
  description: string;
  style?: Object;
  link?: string;
}
interface Props {
  DetailStore: any;
};
interface State {
  artworks: Array<Artwork>;
};


@inject('DetailStore')
@observer
class Aun extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);

    this.state = {
      artworks: [
        {
          img: artwork1,
          title: "빈 집(스틸컷)_아우내",
          type: "MOVIE MAKING",
          description: "2019년 여름방학 때 22기, 23기 일부 부원들 및 지인들과 함께 촬영한 작품입니다. 동정심에 처음 보는 사람을 위해 노력한 것이 자신이 …",
          style: { marginLeft: 0 }
        },
        {
          img: artwork2,
          title: "Puzzle(퍼즐)_아우내",
          type: "MOVIE",
          description: '"Puzzle"은 아우내 24기 신입 부원 모집을 위해 제작된 홍보영상입니다. 아우내에서 영화를 찍는 것처럼, 작품에는 영화를 찍는 과정을 …',
          link: "https://www.youtube.com/watch?v=G4F6vlqpeAI"
        },
        {
          img: artwork2,
          title: "Puzzle(퍼즐)_아우내(현장)",
          type: "MOVIE MAKING",
          description: '"Puzzle"은 아우내 24기 신입 부원 모집을 위해 제작된 홍보영상입니다. 아우내에서 영화를 찍는 것처럼, 작품에는 영화를 찍는 과정을 …',
          link: "https://www.youtube.com/watch?v=cM6LKF3OhVY"
        },
      ]
    }
  }

  render(){
    const { artworks } = this.state;
    return(
      <Container>
        <HeaderComponent type="aun"/>
        <Banner src={aunBanner}/>
        <Title>INTRODUCE</Title>
        <Logo src={aunLogo}/>
        <Description>
          “아름다운 우리들의 내일을 위하여” 라는 슬로건을 가지고<br/>
          활동하는 아우내는 선린인터넷고등학교의<br/>
          실사영상 제작동아리입니다.<br/>
          <br/>
          설립 당시에는 연극부였으나,<br/>
          더욱 다양한 종합예술로의 영역으로 확장하고자<br/>
          실사영상 제작동아리로 변경해 새롭게 시작하였습니다.<br/>
          <br/>
          우리 동아리는 다양한 콘텐츠 제작을 통해<br/>
          부원들의 아름다운 내일을 개척하고자 합니다.<br/>
          <br/>
          끊임없는 도전과 열정으로 많은 분께<br/>
          아름다운 영상을 선사하기 위해 노력할 것입니다.<br/>
        </Description>
        <Title>MEMBERS</Title>
        <MemberWrap>
          
        </MemberWrap>
        <Title>ARTWORKS</Title>
        <ArtworkWrap>
          {artworks.map((item, index) => (
            <ArtworkComponent
              name="aun"
              img={item.img}
              title={item.title}
              type={item.type}
              description={item.description}
              style={item.style}
              link={item.link}
              index={index}
              key={index}
            />
          ))}
        </ArtworkWrap>
      </Container>
    )
  }
}

export default Aun;