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
import artwork2 from 'assets/tate/artwork2.png';
import artwork3 from 'assets/tate/artwork3.png';
import artwork4 from 'assets/tate/artwork4.png';
import artwork5 from 'assets/tate/artwork5.png';
import artwork6 from 'assets/tate/artwork6.png';
import artwork7 from 'assets/tate/artwork7.png';
import artwork8 from 'assets/tate/artwork8.png';
import artwork9 from 'assets/tate/artwork9.png';
import artwork10 from 'assets/tate/artwork10.png';
import artwork11 from 'assets/tate/artwork11.png';
import artwork12 from 'assets/tate/artwork12.png';
import artwork13 from 'assets/tate/artwork13.png';
import artwork14 from 'assets/tate/artwork14.png';
import artwork15 from 'assets/tate/artwork15.png';
import artwork16 from 'assets/tate/artwork16.png';
import artwork17 from 'assets/tate/artwork17.png';
import artwork18 from 'assets/tate/artwork18.png';
import artwork19 from 'assets/tate/artwork19.png';
import artwork20 from 'assets/tate/artwork20.png';
import artwork21 from 'assets/tate/artwork21.png';
import artwork22 from 'assets/tate/artwork22.png';
import artwork23 from 'assets/tate/artwork23.png';
import artwork24 from 'assets/tate/artwork24.png';
import artwork25 from 'assets/tate/artwork25.png';
import artwork26 from 'assets/tate/artwork26.png';
import artwork27 from 'assets/tate/artwork27.png';
import artwork28 from 'assets/tate/artwork28.png';
import artwork29 from 'assets/tate/artwork29.png';
import artwork30 from 'assets/tate/artwork30.png';
import artwork31 from 'assets/tate/artwork31.png';
import artwork32 from 'assets/tate/artwork32.png';
import artwork33 from 'assets/tate/artwork33.png';
import artwork34 from 'assets/tate/artwork34.png';
import artwork35 from 'assets/tate/artwork35.png';

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
  min-width: 1440px;
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
        {
          img: artwork2,
          title: "꿈같은 유토피아 콜라주 ver.1",
          type: "COLLAGE",
          description: "내가 바라는 유토피아를 표현한 콜라주이다. 유토피아라는 이름답게 내가 좋아하는 색 계열로 구성했다.",
        },
        {
          img: artwork3,
          title: "꿈같은 유토피아 콜라주 ver.2",
          type: "COLLAGE",
          description: "내가 바라는 유토피아를 표현한 콜라주이다. 유토피아라는 이름답게 내가 좋아하는 색 계열로 구성했다.",
        },
        {
          img: artwork4,
          title: "colors_김나현",
          type: "ALBUM COVER",
          description: "데이식스의 ‘colors’를 들으며 작업한 앨범 커버 아트이다. 노래의 분위기와 가사를 모두 반영해 열심히 작업했다.",
        },
        {
          img: artwork5,
          title: "선린축제 포스터_김나현",
          type: "POSTER",
          description: "2019 선린축제의 포스터를 맡아서 작업했다. 다양한 사람들이 하나가 되어 모이는 것을 표현하고자 각각 색감이 상반되는 세가지의 색을…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork6,
          title: "2020 신년엽서_김나현",
          type: "EDITORIAL DESIGN",
          description: "반 친구들과 함께 2020년을 맞이하기 위해 만든 신년엽서이다. 2020년 컬러인 클래식 블루를 주로 사용하였고 각각의 선택에 따라 각자 그에…",
        },
        {
          img: artwork7,
          title: "이스케이프_김상현",
          type: "ALBUM COVER",
          description: "외주를 받은 작품인데 음악 이름이 ‘이스케이프’라고 해서 그에 맞는 분위기를 조성했습니다.",
        },
        {
          img: artwork8,
          title: "moon_김상현",
          type: "COLLAGE",
          description: "인스타를 둘러보던 중 어떤 분의 콜라주 작품을 보고 영감을 받아 제작하게 됐습니다.",
        },
        {
          img: artwork9,
          title: "HAPPY HALLOWEEN",
          type: "ILLUSTRATION",
          description: "학교축제 테이트 부서에서 스티커로 내려고 만든 작품입니다. 도트로 최대한 할로윈 분위기를 살려 만든 작품입니다.",
          style: { marginLeft: 0 }
        },
        {
          img: artwork10,
          title: "LOVEY_김상현",
          type: "CHARACTER DESIGN",
          description: "캐릭터 디자인 수행평가를 위해 만든 작품입니다.",
        },
        {
          img: artwork11,
          title: "Re_김상현",
          type: "INFOGRAPHIC",
          description: "제로부터 시작하는 이 세계에 대해, 인포그래픽 수행평가를 위해 만든 타이틀입니다",
        },
        {
          img: artwork12,
          title: "Trudy_박은별",
          type: "ALBUM COVER",
          description: "",
        },
        {
          img: artwork13,
          title: "Neverland_박은별",
          type: "ILLUSTRATION",
          description: "",
          style: { marginLeft: 0 }
        },
        {
          img: artwork14,
          title: "Charmant_박은별",
          type: "EDITORIAL DESIGN",
          description: "‘Charmant’는 매력적인 이라는 뜻을 가진 불어로 패션 관련 포스터나 잡지에 맞는 컨셉으로 디자인했다.  평범함에서 벗어나 이미지와 …",
        },
        {
          img: artwork15,
          title: "JR(day)_박은별",
          type: "COLLAGE",
          description: "콜라주 느낌으로 만든 디자인이다. 배경을 흰색으로 정하여 뜻한 청소년의 순수함 위에 여러 색과 기하학적인 도형과 선들을 이용해 호기심…",
        },
        {
          img: artwork16,
          title: "청소년 장기프로젝트_송지연",
          type: "POSTER",
          description: "제가 활동하고 있는 단체의 포스터 디자인입니다. 단체의 팀컬러인 주황색으로 단체의 열정을 형상화시켰습니다.",
        },
        {
          img: artwork17,
          title: "strawberry cake_송지연",
          type: "ILLUSTRATION",
          description: "신비로운 느낌을 주기 위해 보라 계열을 사용하여 작업한 딸기 케이크 픽셀아트입니다. ",
          style: { marginLeft: 0 }
        },
        {
          img: artwork18,
          title: "strawberry tarte_송지연",
          type: "ILLUSTRATION",
          description: "'strawberry cake'와 함께 작업한 픽셀아트로, 진한 핑크색을 사용하여 앞서 작업한 픽셀아트에 비해 귀여운 느낌을 나타냈습니다….",
        },
        {
          img: artwork19,
          title: "merry christmas_송지연",
          type: "EDITORIAL DESIGN",
          description: "크리스마스의 분위기를 살린 그래픽디자인입니다. 레트로한 느낌을 나타내기 위해 빛바랜 느낌의 색상을 이용하여 작업하였습니다….",
        },
        {
          img: artwork20,
          title: "페퍼톤스 인포그래픽_송지연",
          type: "INFOGRAPHIC",
          description: "가수 '페퍼톤스'의 기본적인 정보가 담겨있는 그래픽디자인입니다.",
        },
        {
          img: artwork21,
          title: "반딧불이_유혜진",
          type: "ILLUSTRATION",
          description: "할로윈을 주제로 한 일러스트",
          style: { marginLeft: 0 }
        },
        {
          img: artwork22,
          title: "sparkle_유혜진",
          type: "ILLUSTRATION",
          description: "'strawberry cake'와 함께 작업한 픽셀아트로, 진한 핑크색을 사용하여 앞서 작업한 픽셀아트에 비해 귀여운 느낌을 나타냈습니다….",
        },
        {
          img: artwork23,
          title: "hot girl bummer_유혜진",
          type: "ILLUSTRATION",
          description: "blackbear의 노래 hot girl bummer의 자켓사진을 재해석한 일러스트",
        },
        {
          img: artwork24,
          title: "케이크_정재우",
          type: "ILLUSTRATION",
          description: "오로지 수채화 물감을 이용해 그린 케이크이다.",
        },
        {
          img: artwork25,
          title: "지하철_정재우",
          type: "ILLUSTRATION",
          description: "포스터물감과 수채화 물감을 이용해 그린 지하철이다.	",
          style: { marginLeft: 0 }
        },
        {
          img: artwork26,
          title: "할로윈 달_정재우",
          type: "ILLUSTRATION",
          description: "2019년 테이트 할로윈 파티를 맞이하여 손거울에 썼던 디자인이다. 달이 나무에 기생되고있는 것과 그 안에 있는 묘지와 좀비는 할로윈 …",
        },
        {
          img: artwork27,
          title: "베놈 & 카니지_정재우",
          type: "ILLUSTRATION",
          description: "마블에 나오는 베놈과 그의 숙적 카니지를 대치하는 그림으로써 빨간색 배경으로 정열적이고 격렬한 느낌을 준다.",
        },
        {
          img: artwork28,
          title: "자기소개 인포그래픽_정한비",
          type: "INFOGRAPHIC",
          description: "‘나’를 소개하기 위한 인포그래픽이다. 차분한 색채를 통해 깔끔한 느낌으로 제작하였다. ",
        },
        {
          img: artwork29,
          title: "<까오> 캐릭터디자인_정한비",
          type: "CHARACTER DESIGN",
          description: "평소 좋아하던 가오리를 캐릭터로 디자인하여 이모티콘 형식으로 만들었다. 6종류의 표정과 기본형을 제작하여 디자인한 캐릭터를 소개…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork30,
          title: "그럴 수 있구나_정한비",
          type: "ALBUM COVER",
          description: "‘신예찬, 정한결, 김민아의 <그럴 수 있구나>’의 앨범아트이다. 사진을 보정하고 디자인해 제작하였다. ",
        },
        {
          img: artwork31,
          title: "라즈베리 비트_정한비",
          type: "EDITORIAL DESIGN",
          description: "실사 촬영한 사진에 노이즈와 배경 보정으로 레트로한 느낌을 추가하여 과거와 현재가 융합된 느낌의 표지를 디자인하였다. 밤이지만…",
        },
        {
          img: artwork32,
          title: "메이데이메이데이",
          type: "EDITORIAL DESIGN",
          description: "‘로맨틱펀치의 <메이데이 메이데이>의 키네틱 타이포그래피 영상이다. 몽환적이고 빠른 우주 공간을 표현하였고 밴드의 영상을 넣는 등 …",
        },
        {
          img: artwork33,
          title: "해피 스켈레톤_조민준",
          type: "ILLUSTRATION",
          description: "축제 때 동아리 굿즈로 제작되었다.",
          style: { marginLeft: 0 }
        },
        {
          img: artwork34,
          title: "패션 잡지 표지 디자인_조민준",
          type: "EDITORIAL DESIGN",
          description: "실사 촬영한 사진에 노이즈와 배경 보정으로 레트로한 느낌을 추가하여 과거와 현재가 융합된 느낌의 표지를 디자인하였다. 공간의 특징을…",
        },
        {
          img: artwork35,
          title: "패션 잡지 표지 디자인_조민준",
          type: "EDITORIAL DESIGN",
          description: "실사 촬영한 사진에 노이즈와 배경 보정으로 레트로한 느낌을 추가하여 과거와 현재가 융합된 느낌의 표지를 디자인하였다. 밤이지만…",
        },
      ]
    }
  }
  render(){
    const { artworks } = this.state;
    return(
      <Container>
        <HeaderComponent type="tate" />
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
              name="tate"
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