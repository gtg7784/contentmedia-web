import * as React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

import HeaderComponent from 'components/HeaderComponent';
import PrizeComponent from 'components/PrizeComponent';
import ArtworkComponent from 'components/ArtworkComponent';
import FooterComponent from 'components/FooterComponent';

import vfirendsVideo from 'assets/vfirends/banner.webm';
import vfriendsIllust from 'assets/vfirends/Illust.png';
import schoolTitle from 'assets/vfirends/schoolAward.svg';
import suburbTitle from 'assets/vfirends/suburbAward.svg';
import schoolAward from 'assets/vfirends/47.svg';
import suburbAward from 'assets/vfirends/8.svg';

import artwork1 from 'assets/vfirends/artwork1.png';
import artwork2 from 'assets/vfirends/artwork2.png';
import artwork3 from 'assets/vfirends/artwork3.png';
import artwork4 from 'assets/vfirends/artwork4.png';
import artwork5 from 'assets/vfirends/artwork5.png';
import artwork6 from 'assets/vfirends/artwork6.png';
import artwork7 from 'assets/vfirends/artwork7.png';
import artwork8 from 'assets/vfirends/artwork8.png';
import artwork9 from 'assets/vfirends/artwork9.png';
import artwork10 from 'assets/vfirends/artwork10.png';
import artwork11 from 'assets/vfirends/artwork11.png';
import artwork12 from 'assets/vfirends/artwork12.png';
import artwork13 from 'assets/vfirends/artwork13.png';
import artwork14 from 'assets/vfirends/artwork14.png';
import artwork15 from 'assets/vfirends/artwork15.png';
import artwork16 from 'assets/vfirends/artwork16.png';
import artwork17 from 'assets/vfirends/artwork17.png';
import artwork18 from 'assets/vfirends/artwork18.png';
import artwork19 from 'assets/vfirends/artwork19.png';
import artwork20 from 'assets/vfirends/artwork20.png';
import artwork21 from 'assets/vfirends/artwork21.png';
import artwork22 from 'assets/vfirends/artwork22.png';
import artwork23 from 'assets/vfirends/artwork23.png';
import artwork24 from 'assets/vfirends/artwork24.png';
import artwork25 from 'assets/vfirends/artwork25.png';
import artwork26 from 'assets/vfirends/artwork26.png';
import artwork27 from 'assets/vfirends/artwork27.png';
import artwork28 from 'assets/vfirends/artwork28.png';
import artwork29 from 'assets/vfirends/artwork29.png';
import artwork30 from 'assets/vfirends/artwork30.png';
import artwork31 from 'assets/vfirends/artwork31.png';
import artwork32 from 'assets/vfirends/artwork32.png';
import artwork33 from 'assets/vfirends/artwork33.png';
import artwork34 from 'assets/vfirends/artwork34.png';
import artwork35 from 'assets/vfirends/artwork35.png';
import artwork36 from 'assets/vfirends/artwork36.png';
import artwork37 from 'assets/vfirends/artwork37.png';
import artwork38 from 'assets/vfirends/artwork38.png';
import artwork39 from 'assets/vfirends/artwork39.png';
import artwork40 from 'assets/vfirends/artwork40.png';
import artwork41 from 'assets/vfirends/artwork41.png';
import artwork42 from 'assets/vfirends/artwork42.png';
import artwork43 from 'assets/vfirends/artwork43.png';
import artwork44 from 'assets/vfirends/artwork44.png';
import artwork45 from 'assets/vfirends/artwork45.png';

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
const Bar = styled.div`
  width: 100%;
  height: 108px;
  background-color: #222222;
  margin-bottom: 64px;
`;
const Illust = styled.img`
  width: 506.7px;
  height: 158.1px;
  margin-top: 120px;
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
  background-color: #eba847;
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

class Vfriends extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      artworks: [
        {
          img: artwork1,
          title: "자기소개 인포그래픽_곽승채",
          type: "INFOGRAPHIC",
          description: "나에 대한 정보를 인포그래픽으로 나타내었다. 기본적인 정보들과 취미, 관심사, 다룰 수 있는 프로그램이 주 내용이다. 간결한 느낌을 주기…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork2,
          title: "StreetLife_김민",
          type: "UI/UX",
          description: "버스킹 공연을 즐기는 이는 정말 많다. 하지만 버스커 이름을 알고 듣는 사람은 많을까? 왜 밴드 가수들이 재능을 가져도 기억되지 못할까?…",
        },
        {
          img: artwork3,
          title: "국민의당 공식 로고 제작_김민",
          type: "LOGO DESIGN",
          description: "외주로 진행했던 정당 로고 제작 프로젝트다. 소통과 공유, 혁신을 강조하는, 작지만 더 큰 정당을 모토로 구상했고 프레젠테이션까지 맡아서…",
        },
        {
          img: artwork4,
          title: "지하철, 익숙한 그곳_김민",
          type: "3D",
          description: "몇 십년이 지나도 구조변경이 어려운 지하철 역사는 첫 설계시부터 큰 고민을 해나가며 미래에도 뒤쳐지지 않을 듯한 ‘미래지향적’ 설계를…",
        },
        {
          img: artwork5,
          title: "세월의 무색함_김민",
          type: "3D",
          description: "2014년 7월, 한 중년 남성이 전봇대에 오르다 감전 당한 사건을 기억하는가? 그는 경범죄로 조사받은 것에 항의하려 전봇대에 올라갔다가…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork6,
          title: "토요일 밤, 6 : 30_김민",
          type: "3D",
          description: "3D 실내 공모전에 출품했던 3D 모델링 작품이다. 수상하지 못해 아쉬웠으나 제작 과정에서 느꼈던 보람과 성취는 상을 받지 못하여도…",
        },
        {
          img: artwork7,
          title: "서울, 그 곳_김민",
          type: "3D",
          description: "몇 십년이 지나도 구조변경이 어려운 지하철 역사는 첫 설계시부터 큰 고민을 해나가며 미래에도 뒤쳐지지 않을 듯한 ‘미래지향적’ 설계를…",
        },
        {
          img: artwork8,
          title: "토스 모션그래픽 CF_김민",
          type: "3D MOTION GRAPHICS",
          description: "교내 영상 공모전에 출품했던 3D 모션그래픽 광고다. 휴대폰 화면 랩핑과 라이팅에 힘을 쏟았으며 직접 방 안에서 휴대폰을 촬영하고 그것을…",
        },
        {
          img: artwork9,
          title: "브이프렌즈 홍보영상 3D_김민",
          type: "MOTION GRAPHICS",
          description: "브이프렌즈 시연회/홍보영상을 제작하였다.      렌더링은 모두 1프레임당 5분정도 걸렸고 60프레임으로 작업하였다. 렌더링하는 시간이…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork10,
          title: "브프 홍보영상 2D_김민준",
          type: "MOTION GRAPHICS",
          description: "브이프렌즈의 홍보영상이다. 나레이션을 삽입하였고 모든 일러스트를 직접 제작하였다. 영상에는 브이프렌즈의 수상 내역등의 다양한…",
        },
        {
          img: artwork11,
          title: "브프 시연회 모션 2D_김민준",
          type: "MOTION GRAPHICS",
          description: "시연회 작품을 연결해서 한번에 보여주는 쇼릴 영상을 제작했다. ",
        },
        {
          img: artwork12,
          title: "서울 자전거, 따릉이_김민준",
          type: "VIDEO",
          description: "선린인터넷고등학교에 입학하고 나서 영상공모전에서 입상을 한 작품이다 이전에 받았던 그래픽공모전에서 상을 탔던 것과는 다르게 더…",
        },
        {
          img: artwork13,
          title: "앱잼 NUGU ‘Zento’_김민준",
          type: "MOTION GRAPHICS",
          description: "작년 말 앱잼에서 제작했던 영상으로 열심히 작업했던 영상이다. 비록 입상을 하지는 못하였으나 외부 해커톤을 통해 새로운 경험을 할 수…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork14,
          title: "Rap Stars_김예린",
          type: "PHOTO",
          description: "직접 DSLR 카메라와 망원렌즈를 이용하여 찍고 포토샵으로 보정한 사진이다. 평소 다른 작품들의 밝은 색감과는 달리 랩과 힙합이라는 장르…",
        },
        {
          img: artwork15,
          title: "Aaron_김예린",
          type: "POSTER",
          description: "좋아하는 가수의 사진을 이용하여 포스터 디자인을 작업했다. 한결 단조로울 수 있는 배경에 포토샵의 블렌드 기능을 활용하여 우주에 있는…",
        },
        {
          img: artwork16,
          title: "Baekho_김예린",
          type: "ILLUSTRATION",
          description: "좋아하는 가수의 사진을 내 그림체로 변화시켜 그린 것이다. 자칫 단조로울 수 있는 배경에는 캘리그라피 폰트로 이름을 적어 넣었다. 본 사진…",
        },
        {
          img: artwork17,
          title: "thisislove_김예린",
          type: "ILLUSTRATION",
          description: "딱히 뜻은 없고 그냥 누워있다가 그림이 그리고 싶어져서 그렸다. 색은 굳이 칠하지 않았고 흑백이 더욱 어울리는 느낌인 것 같아 흑백으로 …",
          style: { marginLeft: 0 }
        },
        {
          img: artwork18,
          title: "v. friends_김예린",
          type: "POSTER",
          description: "브이프렌즈 단체사진의 색감을 보정하고 직접 쓴 캘리그라피를 삽입해 포스터 디자인을 하였다. 원본 사진이 가로로 잘린 사진이라 위의 하늘…",
        },
        {
          img: artwork19,
          title: "iloveyourcheek_김예린 ",
          type: "MOTION GRAPHICS / ILLUSTRATION",
          description: "사이툴로 그림을 그리고 애프터이펙트로 모션을 넣어 포토샵을 이용하여 인스타그램 느낌을 주고 GIF 형태로 만들었다. 자칫 단조로울 수 있는…",
        },
        {
          img: artwork20,
          title: "선린제 포스터_성지빈",
          type: "POSTER",
          description: "눈에 띄는 느낌을 주고 싶어서 네온사인으로 만들었다. 대표적으로 주황색, 핑크색, 보라색 위주의 색상을 사용해 열정적이고 활발한 느낌을…",
        },
        {
          img: artwork21,
          title: "선린제 부스 포스터_성지빈",
          type: "POSTER",
          description: "선린제 부스 홍보 포스터 1과 같은 시리즈로 만들었다. 홍보를 위한 포스터가 아닌 사람들에게 알리기 위한 메뉴판 포스터인만큼 내용을…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork22,
          title: "BLACK : 나의 세계_성지빈",
          type: "COLLAGE",
          description: "보통 검은색의 이미지는 부정적이다. 하지만 나는 검은색을 모든 색이 섞인 최종 단계 즉, 내가 도달할 마지막 모습이라고 생각한다. 지금…",
        },
        {
          img: artwork23,
          title: "판빙빙 폴리곤아트_성지빈 ",
          type: "ILLUSTRATION",
          description: "좋아하는 중국 배우를 폴리곤으로 표현하면 어떨까? 해서 만들게 되었다. 빨간색과 핑크색 위주로 사용하여 화려한 사극 느낌을 더했다. …",
        },
        {
          img: artwork24,
          title: "콜라주 : 유토피아_성지빈",
          type: "COLLAGE",
          description: "유토피아란? 현실에는 존재하지 않는 이상적인 세계, 이상향(理想鄕) 키워드는 사랑, 그네, 달, 봄, 우주, 고래다. 전체적으로 몽환적인 …",
        },
        {
          img: artwork25,
          title: "Vilolet, 나의 상상 속_성지빈",
          type: "POSTER",
          description: "어릴 적, 내 꿈은 마녀였다. 구름을 보며 무엇인가를 떠올리는 것을 즐겼고 마법을 부리기 위해 주문을 외우는 것도 서슴치 않았다. 커 갈수록…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork26,
          title: "호빵맨 인포그래픽_성지빈",
          type: "INFOGRAPHIC",
          description: "어렸을 때 가장 좋아하는 만화가 호빵맨이였다. 그때의 분위기를 회상하고 호빵맨에 대해 잘 모르는 사람들에게 소개하기 위해 제작했다….",
        },
        {
          img: artwork27,
          title: "캐릭터 디자인 : 모뗀사람",
          type: "CHARACTER DESIGN",
          description: "평소에 동물이나 사물의 이름을 사용해 말장난을 하는 것을 좋아했다. 직접 캐릭터를 만들고 관련된 동물 잠옷을 입히면 어떨까? 해서 제작…",
        },
        {
          img: artwork28,
          title: "잠깐의 황홀함 : 마약_성지빈",
          type: "POSTER",
          description: "한참 다시 떠오르고 있는 문제였다. 찾아보니 내가 모르는 정말 다양한 종류의 마약이 있었고 많은 사람들에게 경각심을 주고자 마약을 주제로…",
        },
        {
          img: artwork29,
          title: "인포그래픽 모작_성지빈",
          type: "INFOGRAPHIC",
          description: "항상 다른 사람들의 인포그래픽을 봐오다 나를 나타내는 인포그래픽을 만들고자해서 모작으로 제작하게 되었다. 가장 좋아하는 색이자 나를…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork30,
          title: "대진표 포스터_성지빈",
          type: "POSTER",
          description: "체육대회 대진표를 만들었다. 글자만 넣어 밋밋하지 않게 하단은 아이소매트릭으로 관련된 운동과 같게 제작했다. 사람을 넣어 생동감 있고 …",
        },
        {
          img: artwork31,
          title: "누구를 위한 1등인가_정준혁",
          type: "CHARACTER DESIGN",
          description: "대한민국은 굉장히 발달한 선진국이지만, 선진국 같지 않은 면모를 보일 때가 많다. OECD 국가 중 자살률, 노인빈곤율, 노동시간 등 여러가지…",
        },
        {
          img: artwork32,
          title: "길 - 콜라주_정준혁",
          type: "POSTER",
          description: "내가 마주한 인생을 표현하였다. 정면에는 장애물이 다가오고 주변 분위기는 어둡지만 이를 견디고 나아가야 한다.",
        },
        {
          img: artwork33,
          title: "UI/UX교재_브이프렌즈",
          type: "EDITORIAL DESIGN",
          description: "선린 SSF 나눔축제 브이프렌즈 교재를 여러 부원이 함꼐 제작했다. ",
          style: { marginLeft: 0 }
        },
        {
          img: artwork34,
          title: "생각은 많고, 길은 다양하다?",
          type: "POSTER",
          description: "우리 사회가 학생들에게 무조건 공부를 하라는 것에 대해 의문을 품고 만든 작품이다.왜 우리의 인생은 첫번째 선택지가 모두 ctrl c …",
        },
        {
          img: artwork35,
          title: "PINK_최서연",
          type: "ILLUSTRATION",
          description: "사람에다가 핑크를 끼얹었다. 모든 색을 핑크로 도배했다. 분홍색의 부드러움을 표현하기 위해 선을 따지 않고 명암을 주었으며, 펜 굵기를 …",
        },
        {
          img: artwork36,
          title: "ash_최서연",
          type: "ILLSTRATION",
          description: "외로운 바다 한 가운데 동떨어진 사람을 그렸다. 외롭고 쓸쓸한 느낌을 강조하기 위해 흑백으로 표현했다. 영혼이 없어 보이는 표정과 축처진…",
        },
        {
          img: artwork37,
          title: "yellow_최서연",
          type: "ILLUSTRATION",
          description: "난색 계열만을 사용해 인물을 표현했다. 배경에도 노을이 진 하늘을 흐리게 합성했다. 따뜻한 색을 사용했지만, 인물은 어딘가 쓸쓸해보인다…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork38,
          title: "모바일 부족화_최서연",
          type: "INFOGRAPHIC",
          description: "'메세지가 미디어다'라는 책을 읽고 '모바일 부족화'의 개념에 대해서 알게 되었다. 새로운 사회에 새롭게 등장하는 그들에 대해 많은 사람들…",
        },
        {
          img: artwork39,
          title: "주작, '화명’_최서연",
          type: "CHARACTER DESIGN",
          description: "뷰티 유튜버 '리수'님의 주작 메이크업을 보고 캐릭터 디자인을 했다.  화난 얼굴상에 얇은 입, 진한 붉은 메이크업으로 새를 의인화했다. …",
        },
        {
          img: artwork40,
          title: "달의 객잔_최서연",
          type: "EDITORIAL DESIGN",
          description: "호텔 델루나의 달이 객잔을 주제로 타이틀 디자인을 했다. 두가지 색깔을 사용해서 차분하고 담담한 인상을 표현했다. 한자, 얇은 세리프체, …",
        },
        {
          img: artwork41,
          title: "그 공간 너머_최서연",
          type: "ILLUSTRATION",
          description: "'피터팬'에 나오는 네버렌드는 환상 속의 나라이다. 현실에서 그 환상 너머로 데려다주는 특별한 말을 표현해봤다. 알록달록한 다양한 색채를…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork42,
          title: "SNS_최서연",
          type: "EDITORIAL DESIGN",
          description: "'메세지가 미디어다'라는 책을 읽고 '모바일 부족화'의 개념에 대해서 알게 되었다. 새로운 사회에 새롭게 등장하는 그들에 대해 많은 사람들…",
        },
        {
          img: artwork43,
          title: "그 시절, 우리_최서연",
          type: "EDITORIAL DESIGN",
          description: "'그 시절, 우리_나의 이야기가 담긴 디자인'에 대해서 발표할 때 만든 PPT 표지이다. 나는 빨강머리 앤과 모래요정 바람돌이의 애니메이션…",
        },
        {
          img: artwork44,
          title: "떠나자 해외여행_최원호",
          type: "EDITORIAL DESIGN",
          description: '타이틀 디자인: 떠나자 해외여행 네팔 국기색인 노란색과 빨간색을 사용하였다. "떠나자"라는 문구에 맞게 신나고 활발한 …',
        },
        {
          img: artwork45,
          title: "glorypath_김예린",
          type: "ILLUSTRATION",
          description: "'피터팬'에 나오는 네버렌드는 환상 속의 나라이다. 현실에서 그 환상 너머로 데려다주는 특별한 말을 표현해봤다. 알록달록한 다양한 색채를…",
          style: { marginLeft: 0 }
        }
      ]
    };
  }
  render(){
    const { artworks } = this.state;
    return(
      <Container>
        <HeaderComponent background="#222222" type="vfriends" />
        <ReactPlayer url={vfirendsVideo} width="1440px" height="810px" playing muted />
        <Bar />
        <Title>INTRODUCE</Title>
        <Illust src={vfriendsIllust} alt=""/>
        <Description>
          v.friends는 디자인의 즐거움을<br/>
          다양한 사람들과 나누며 성장하는 곳으로,<br/>
          콘텐츠디자인과 "디자인 교육 봉사 동아리"입니다.<br/>
          여러가지 디자인을 배움과 동시에 아는 것을 공유합니다.<br/>
          <br/>
          v.friends는 2019년 멀티미디어과<br/>
          신입생 특별교육을 시작으로 1, 2기 자율동아리로 활동을 했으며,<br/>
          2020년 학과명 변경을 기점으로<br/>
          콘텐츠다자인과 소속동아리가 되었습니다.<br/>
          <br/>
          v.friends에선 포토샵, 일러스트레이터, XD, 인디자인,<br/>
          에프터 이펙트 등 다양한 디자인 툴을 배울 수 있습니다.<br/>
          그리고 증진된 디자인 능력으로 다른 사람을 가르치면서<br/>
          스피치 능력도 기를 수 있습니다.
        </Description>
        <Title>activities</Title>
        <PrizeWrap>
          <PrizeComponent title={schoolTitle} number={schoolAward} />
          <PrizeComponent title={suburbTitle} number={suburbAward} />
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

export default Vfriends;