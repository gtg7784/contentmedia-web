import * as React from 'react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';
import PrizeComponent from 'components/PrizeComponent';
import ArtworkComponent from 'components/ArtworkComponent';
import FooterComponent from 'components/FooterComponent';

import illust from 'assets/mir/illust.png';
import logo from 'assets/mirLogo.svg';
import schoolTitle from 'assets/mir/schoolTitle.svg';
import suburbTitle from 'assets/mir/suburbAward.svg';
import schoolAward from 'assets/mir/15.svg';
import suburbAward from 'assets/mir/3.svg';
import View from 'assets/mir/view.svg';

import artwork1 from 'assets/mir/artwork1.png';
import artwork2 from 'assets/mir/artwork2.png';
import artwork3 from 'assets/mir/artwork3.png';
import artwork4 from 'assets/mir/artwork4.png';
import artwork5 from 'assets/mir/artwork5.png';
import artwork6 from 'assets/mir/artwork6.png';
import artwork7 from 'assets/mir/artwork7.png';
import artwork8 from 'assets/mir/artwork8.png';
import artwork9 from 'assets/mir/artwork9.png';
import artwork10 from 'assets/mir/artwork10.png';
import artwork11 from 'assets/mir/artwork11.png';
import artwork12 from 'assets/mir/artwork12.png';
import artwork13 from 'assets/mir/artwork13.png';
import artwork14 from 'assets/mir/artwork14.png';
import artwork15 from 'assets/mir/artwork15.png';
import artwork16 from 'assets/mir/artwork16.png';
import artwork17 from 'assets/mir/artwork17.png';
import artwork18 from 'assets/mir/artwork18.png';
import artwork19 from 'assets/mir/artwork19.png';
import artwork20 from 'assets/mir/artwork20.png';
import artwork21 from 'assets/mir/artwork21.png';
import artwork22 from 'assets/mir/artwork22.png';
import artwork23 from 'assets/mir/artwork23.png';
import artwork24 from 'assets/mir/artwork24.png';
import artwork25 from 'assets/mir/artwork25.png';
import artwork26 from 'assets/mir/artwork26.png';
import artwork27 from 'assets/mir/artwork27.png';
import artwork28 from 'assets/mir/artwork28.png';
import artwork29 from 'assets/mir/artwork29.png';
import artwork30 from 'assets/mir/artwork30.png';
import artwork31 from 'assets/mir/artwork31.png';
import artwork32 from 'assets/mir/artwork32.png';
import artwork33 from 'assets/mir/artwork33.png';

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
const BannerWrap = styled.div`
  min-width: 1440px;
  height: 810px;
  margin-bottom: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 202px;
`;
const Button = styled.button`
  width: 240px;
  height: 64px;
  border-radius: 20px;
  background-color: #ff749e;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Illust = styled.img`
  width: 863px;
  height: 607.5px;
  object-fit: contain;
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
  background-color: #ff749e;
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

class Mir extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);

    this.state = {
      artworks: [
        {
          img: artwork1,
          title: "꽃가루 요정, 비비_강민지",
          type: "ILLUSTRATION",
          description: "우리들의 눈에는 보이지 않지만 가까운 곳에서 열심히 일하는 꽃들의 작은 기사들. 플로라 나라의 꽃가루 요정들은 자신이 맡은 계절을 …",
          style: { marginLeft: 0 }
        },
        {
          img: artwork2,
          title: "마법소녀 샤샤_강민지",
          type: "ILLUSTRATION",
          description: "샤샤는 모두가 잠든 사이에 인간세계에 내려오는 마물들을 물리치는 마법소녀이다. 평범한 고등학생 시아는 하늘에 모두를 지키고 싶다는…",
        },
        {
          img: artwork3,
          title: "해냥생물_강민지",
          type: "ILLUSTRATION",
          description: "물고기를 찾아 직접 바다로 들어가게 된 고양이! 호흡하기 위해서 어항을 머리에 쓰고 바닷속으로 들어간다. 고양이가 들어간 바닷속은 …",
        },
        {
          img: artwork4,
          title: "미르와의전쟁_김은서",
          type: "POSTER",
          description: "미르를 상징하는 색인 분홍색과 연보라색을 주요색으로 사용하였다. 어떤 그림을 그려넣어야 조금 더 미르라는 것이 돋보일까 고민하다 …",
        },
        {
          img: artwork5,
          title: "야채6총사_김은서",
          type: "CHARACTER DESIGN	",
          description: "항상 서울진출을 꿈꾸는 시골텃밭 야채친구들이 스타가 되고 싶어서 이모티콘이 되기로 하고 만들어진 야채 6총사.",
          style: { marginLeft: 0 }
        },
        {
          img: artwork6,
          title: "용과 학생_김자현",
          type: "POSTER",
          description: "미르는 “용”을 뜻하는 말로, 순우리말이다. 그래서 포스터에 용을 나타내어 미르를 표현하였고, 학생의 의상은 미르 동잠으로 표현하였다….",
        },
        {
          img: artwork7,
          title: "파란 하늘_김자현",
          type: "ILLUSTRATION",
          description: "파란 하늘과 학생을 그려서 밝은 느낌을 주었다. 약간 부스스한 헤어스타일과 손동작, 옆을 바라보는 시선, 마지막으로 코에 붙인 밴드를 …",
        },
        {
          img: artwork8,
          title: "갈색 머리 무사_김자현",
          type: "ILLUSTRATION",
          description: "동양풍 그림으로 한복을 그렸고 머리도 길게 그려 표현하였다. 칼을 잘 쓰는 무사를 그렸다.",
        },
        {
          img: artwork9,
          title: "옆모습 미인_김자현",
          type: "ILLUSTRATION",
          description: "학교축제 테이트 부서에서 스티커로 내려고 만든 작품입니다. 도트로 최대한 할로윈 분위기를 살려 만든 작품입니다.",
          style: { marginLeft: 0 }
        },
        {
          img: artwork10,
          title: "특이한 귀_김자현",
          type: "CHARACTER DESIGN",
          description: "캐릭터 디자인 수행평가를 위해 만든 작품입니다.",
        },
        {
          img: artwork11,
          title: "메이플스토리 팬아트_김혜진",
          type: "ILLUSTRATION",
          description: "메이플스토리의 호영 캐릭터 특유의 장난스러움과 당돌함을 표현하고자했다. 손에 든 접선(摺扇)과 매듭, 그리고 허리춤에 당당히 자리하는…",
        },
        {
          img: artwork12,
          title: "skull orch_김혜진",
          type: "ILLUSTRATION",
          description: "버스킹으로 기타와 드럼을 연주하는 것처럼 관현악을 연주하는 건 어떨까? 란 생각을 가지고 그렸다. 어두운 채도에 눈에 띄는 색을 포인트…",
        },
        {
          img: artwork13,
          title: "세라복_김혜진",
          type: "ILLUSTRATION",
          description: "옛날 교과서에 있는 그림을 보며 영감을 얻었다. 하이라이트가 돋보이는 머리칼에 전체적으로 채도가 높은 색으로 채색했다. 버건디의 상의에…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork14,
          title: "발푸르기스의 밤_김혜진",
          type: "ILLUSTRATION",
          description: "파란 머리칼에 체리같은 머리끈으로 포인트를 주었다. 연하늘의 드레스가 살짝 흩날리며 들린 모습을 강조했다. 전체적으로 따듯한 색감을…",
        },
        {
          img: artwork15,
          title: "새우잠_김혜진",
          type: "ILLUSTRATION",
          description: "어린 아이가 몸을 구부리고 자는 모습을 그렸다. 품에는 미르를 상징하는 분홍 용 인형을 안겨주었다. 천체적으로 따듯한 색감을 써 밝은 …",
        },
        {
          img: artwork16,
          title: "레트로 미르_김혜진",
          type: "ILLUSTRATION",
          description: "채도가 높고 대조를 이루는 색을 사용해 화려함을 표현했다. 두 소녀가 입고있는 외투는 미르의 야구자켓이며, 기하학적인 도형을 배경으로…",
        },
        {
          img: artwork17,
          title: "happy_김혜진",
          type: "ILLUSTRATION",
          description: "신비로운 느낌을 주기 위해 보라 계열을 사용하여 작업한 딸기 케이크 픽셀아트입니다. ",
          style: { marginLeft: 0 }
        },
        {
          img: artwork18,
          title: "미르포스터_박지형",
          type: "POSTER",
          description: "여러 패턴을 디자인해서 한 페이지에 모았다. 패턴/그림을 하나씩 뜯어서 보면 디테일함을 볼 수 있다….",
        },
        {
          img: artwork19,
          title: "취급주의_박지형",
          type: "EDITORIAL DESIGN",
          description: "새파란 물 속에 가라앉고 싶을때의 기분을 표현했다. 들어가보면 생각보다 시원하지 않을까?",
        },
        {
          img: artwork20,
          title: "미르포스터_염지원",
          type: "POSTER",
          description: "미르를 홍보하는 포스터이다.",
        },
        {
          img: artwork21,
          title: "동양풍그림_염지원",
          type: "ILLUSTRATION",
          description: "클립스튜디오를 사용한 동양풍 일러스트이다",
          style: { marginLeft: 0 }
        },
        {
          img: artwork22,
          title: "로젤리아_염지원",
          type: "ILLUSTRATION",
          description: "로젤리아의 리더를 표현한 일러스트",
        },
        {
          img: artwork23,
          title: "포켓몬_염지원",
          type: "ILLUSTRATION",
          description: "포켓몬스터소드의 물타입 체육관 관장과 스타팅포켓몬이다.",
        },
        {
          img: artwork24,
          title: "YUK!_장하민",
          type: "ILLUSTRATION",
          description: "디자인한 캐릭터의 설정을 살리기위해 제작한 장면 중 하나이다. 요리 연습을 위해 만든 스파게티를 처음 맛봤지만 맛이 없어서 충격받은…",
        },
        {
          img: artwork25,
          title: "SUMMER_장하민",
          type: "ILLUSTRATION",
          description: "무더운 여름날, 평상에 앉아 아이스크림으로 더위를 달래는 아이를 표현하였다. 비교적 단조로워 보이는 상단부분을 채우기 위해 SUMMER…",
          style: { marginLeft: 0 }
        },
        {
          img: artwork26,
          title: "현혹당하지 말 것_장하민",
          type: "ILLUSTRATION",
          description: "초롱 아귀와 물고기를 소재로 그린 장면이다. 보석에 눈이 팔려 아귀의 입을 보지 못한 물고기가 잡아먹히기 직전의 모습을 담았다.",
        },
        {
          img: artwork27,
          title: "어서 와! 미르에_장하민",
          type: "ILLUSTRATION",
          description: "동아리 홍보를 목적으로 그린 그림이다. 캐릭터가 그림을 보고 있는 관람자에게 손을 내미는 동작으로 초대와 환영을 표현하였다….",
        },
        {
          img: artwork28,
          title: "고교마와 주담_최가은",
          type: "ILLUSTRATION",
          description: "엄마는 같지만 아빠가 다른 남매다. 프랑켄슈타인+페어리 혼혈인 대학생 고교마와 인간+페어리 혼혈인 고등학생 주담. 담은 교마를 별로 안…",
        },
        {
          img: artwork29,
          title: "너를 항해_최가은",
          type: "ILLUSTRATION",
          description: "밤바다를 항해하고 있는 배가 꽃잎들을 바다에 뿌리고 있다. '나'를 떠나가는 사람들을 붙잡고 싶다고 그 자리에 멈춰서 기다리고 있을 수는 …",
          style: { marginLeft: 0 }
        },
        {
          img: artwork30,
          title: "동료가 된 고양이_최가은",
          type: "ILLUSTRATION",
          description: "해파리와 고양이가 동료가 됐다. 해파리와 함께 바다로 들어간 고양이는 다른 해파리들과 인사를 나누고 물고기의 행방을 묻는다….",
        },
        {
          img: artwork31,
          title: "미르 19기의 일상_최가은",
          type: "ILLUSTRATION",
          description: "19기 미르 부원들을 전부 그렸다. 코로나만 없었으면 이 포스터는 이미 페이스북에서 동아리 홍보를 위해 쓰이고 있었을 것이다….",
        },
        {
          img: artwork32,
          title: "비니소녀_최가은",
          type: "ILLUSTRATION",
          description: "원래는 그냥 숏컷인 소녀가 비니를 쓰고 있기만 한 그림이었다. 막상 그리다보니 목이 너무 길어서 목에 링들을 끼워서 목의 길이를 늘리는…",
        },
        {
          img: artwork33,
          title: "수_최가은",
          type: "ILLUSTRATION",
          description: "컴퓨터그래픽시간에 캐릭터디자인 수행평가를 위해 만든 게임 캐릭터다. '수'라는 이름은 영단어 'sew(꿰매다)'에서 가져왔다….",
          style: { marginLeft: 0 }
        },
      ]
    }
  }
  render(){
    const { artworks } = this.state;
    return(
      <Container>
        <HeaderComponent type="mir" />
        <BannerWrap>
          <LogoWrap>
            <Logo src={logo} alt="" style={{ marginTop: 0, marginBottom: 64 }}/>
            <Button>
              <img src={View} alt=""/>
            </Button>
          </LogoWrap>
          <Illust src={illust} alt="" />
        </BannerWrap>
        <Title>INTRODUCE</Title>
        <Logo src={logo} alt=""/>
        <Description>
          선린인터넷고등학교 콘텐츠디자인과의 <br/>
          유일한 일러스트레이션 전문동아리인 MIR입니다.<br/>
          <br/>
          인체 구조, 캐릭터 데포르메, 웹툰 기초, 애니메이션 제작 등 <br/>
          다양한 커리큘럼으로 이루어진 동아리 수업과 <br/>
          클립스튜디오, 포토샵 등의 프로그램을 연계한 <br/>
          체계화 된 수업으로 전문 일러스트레이터를 양성합니다.<br/>
          <br/>
          올해로 20년을 맞이한 오랜 역사를 자랑하는 미르!<br/>
          <br/>
          저희와 함께 새로운 미래를 그릴 20기 신입생 여러분들을 기다립니다!
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
              name="mir"
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

export default Mir;