import * as React from 'react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';
import PrizeComponent from 'components/PrizeComponent';
import ArtworkComponent from 'components/ArtworkComponent';
import FooterComponent from 'components/FooterComponent';

import logo from 'assets/tateLogo.svg';
import banner from 'assets/tate/banner.png';
import second from 'assets/tate/17.svg';
import third from 'assets/tate/24.svg';
import secondPrize from 'assets/tate/secondPrize.svg';
import thirdPrize from 'assets/tate/thirdPrize.svg';

import artwork1 from 'assets/tate/artwork1.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2.6px;
  color: #3f3d56;
`;
const Banner = styled.img`
  width: 1440px;
  height: 810px;
  margin-bottom: 128px;
`;
const Logo = styled.img`
  width: 160px;
  height: 160px;
  margin: 91px 0px;
`;
const Description = styled.p`
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-align: center;
  color: #3f3d56;
  margin-top: 60px;
  margin-bottom: 248px;
`;
const PrizeWrap = styled.div`
  width: 100%;
  height: 512px;
  background-color: #5055fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 156px;
  margin-bottom: 320px;
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
interface Props { };
interface State {
  artworks: Array<Artwork>;
};

class Tate extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);

    this.state = {
      artworks: [
        {
          img: artwork1,
          title: "할로윈 콜라주_김나현",
          type: "COLLAGE",
          description: "테이트 축제 굿즈인 스티커로 제작했던 할로윈 콜라주이다.",
          style: { marginLeft: 0 }
        },
      ]
    }
  }
  render(){
    const { artworks } = this.state;
    return(
      <Container>
        <HeaderComponent background="#f4f8fc" type="tate" width="68px" height="68px"/>
        <Banner src={banner} alt=""/>
        <Title>INTRODUCE</Title>
        <Logo src={logo} alt=""/>
        <Description>
          TATE는 다양한 분야의 디자인을<br/>
          다루는 디자이너들이 모여 자신의 개성과<br/>
          창의성을 마음껏 발휘할 수 있는<br/>
          전공 디자인 동아리입니다.<br/>
          <br/>
          TATE에서는 일러스트, 포토샵, 3D MAX 등을 통해<br/>
          여러 분야의 디자인을 배우고 익히며 자신의 능력과 창의력을<br/>
          한층 더 발전시킬 수 있습니다.<br/>
          <br/>
          또한 소프트웨어 나눔축제, 선린축제 굿즈 부스와 같은 행사에<br/>
          참여하여 다양한 경험을 할 수 있습니다.<br/>
        </Description>
        <Title>activities</Title>
        <PrizeWrap>
          <PrizeComponent title={secondPrize} number={second} />
          <PrizeComponent title={thirdPrize} number={third} />
        </PrizeWrap>
        <Title>ARTWORKS</Title>
        <ArtworkWrap>
          {artworks.map((item, index) => (
            <ArtworkComponent
              name="vfriends"
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
        <FooterComponent/>
      </Container>
    )
  }
}

export default Tate;