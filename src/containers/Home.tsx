import * as React from 'react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';
import IntroComponent from 'components/IntroComponent';
import ClubComponent from 'components/ClubComponent';
import QnaComponent from 'components/QnaComponent';
import FooterComponent from 'components/FooterComponent';

import scrollDown from 'assets/scrolldown.svg';
import mainIllust from 'assets/mainIllust.png';
import scrollLeftIcon from 'assets/memberLeftIcon.svg';
import scrollRighttIcon from 'assets/memberRightIcon.svg';

import vfriendsLogo from 'assets/vfriendsLogo.svg';
import aunLogo from 'assets/aunLogo.svg';
import tateLogo from 'assets/tateLogo.svg';
import junrLogo from 'assets/junrLogo.svg';
import zeropenLogo from 'assets/zeropenLogo.svg';
import mirLogo from 'assets/mirLogo.svg';
import edcanLogo from 'assets/edcanLogo.svg';
import rgLogo from 'assets/rgLogo.svg';
import applepiLogo from 'assets/applepiLogo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-min-width: 1440px;
  width: 100%;
  height: 100%;
  background: #f4f8fc;
  overflow-x: hidden;
`;
const ScrollDownWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
`;
const ScrollDownText = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-family: 'Bebas Neue', cursive;
  color: #3581d7;
`;
const ScrollDownImage = styled.img`
  width: 48px;
  height: 24px;
  margin-top: 18px;
`;
const MembersWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 186px;
  width: 100%;
`;
const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2.6px;
  color: #3f3d56;
`;
const MainIllust = styled.img`
  position: absolute;
  opacity: 0.34;
  left: 55px;
  top: 1245px;
  z-index: 0;
`;
const MembersContent = styled.div`
  width: 100%;
  padding: 0px 100px;
  margin-top: 62px;
  overflow-x: hidden;
`;
const ClubsWrap = styled.div`
  width: 1304px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 209px;
  overflow-x: hidden;
`;
const QnaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QnaContent = styled.div`
  width: 1040px;
  display: flex;
  flex-direction: row;
  margin-bottom: 62px;
  flex-wrap: wrap;
`;
const DotWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Dot = styled.div`
  margin: 0px 4px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

interface Club {
  to: string;
  content: string;
  logo: string;
  style?: Object;
  top: number;
  bottom: number;
}
interface Qna {
  question: string;
  answer: string;
  style?: Object;
}

interface Props { }
interface State {
  clubs: Array<Club>;
  qna: Array<Qna>;
  clubStatus: number;
}

class Home extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);

    this.state = {
      clubs: [
        {
          to: "/vfriends",
          content: "<span>V.FRIENDS</span>는<br/>디자인의 즐거움을 다양한 사람들과<br/>나누며 성장하는 곳으로,<br/>콘텐츠디자인과<br/>‘디자인 교육 봉사 동아리’입니다.",
          logo: vfriendsLogo,
          style: { margin: 0 },
          top: 46,
          bottom: 28,
        },
        {
          to: "/aun",
          content: `“아름다운 우리들의 내일을 위하여” 라는<br/>슬로건을 가지고 활동하는 <span>아우내</span>는<br/>선린인터넷고등학교의<br/>‘실사영상 제작동아리’입니다.`,
          logo: aunLogo,
          top: 39,
          bottom: 23,
        },
        {
          to: "/tate",
          content: "<span>TATE</span>는 다양한 분야의<br/>디자인을 다루는 디자이너들이 모여<br/>자신의 개성과 창의성을<br/>마음껏 발휘할 수 있는<br/>전공 디자인 동아리입니다.",
          logo: tateLogo,
          top: 24,
          bottom: 14,
        },
        {
          to: "/junr",
          content: "<span>자의누리</span>는 영상이라는 매체를 통해<br/>세상의 중심이 되고자 하는<br/>콘텐츠디자인과<br/>영상 제작 전문 동아리입니다",
          logo: junrLogo,
          top: 31,
          bottom: 23,
        },
        {
          to: "https://zer0pen.kr/",
          content: "게임을 좋아하는 사람들이 모여<br/>우리만의 창의적인 게임을 만드는<br/>멀티플랫폼 게임개발동아리<br/><span>zer0pen</span>입니다",
          logo: zeropenLogo,
          top: 34.2,
          bottom: 24,
        },
        {
          to: "/mir",
          content: "<span>MIR</span>는 미래의 일러스트레이터를<br/>양성하는 콘텐츠디자인과<br/>‘일러스트 전문동아리’입니다.",
          logo: mirLogo,
          style: { margin: 0 },
          top: 26,
          bottom: 39,
        },
        {
          to: "https://edcan.kr/",
          content: "<span>EDCAN</span>은 새로운 모바일 시대를<br/>이끌어 나가는 크리에이터들의<br/>동아리, 소프트웨어과<br/>'모바일 컨텐츠 개발 동아리'입니다.",
          logo: edcanLogo,
          top: 28,
          bottom: 30,
        },
        {
          to: "https://sunrin-rg.github.io/",
          content: "이제는 게임을 직접 만들어볼 시간이에요!<br/>소프트웨어과 게임 개발 동아리<br/><span>RG</span>입니다 :D",
          logo: rgLogo,
          top: 30,
          bottom: 39,
        },
        {
          to: "http://appplepie.kr",
          content: "선린인터넷 최초의<br/>모바일 콘텐츠 전문개발 동아리<br/><span>애플파이</span> 입니다",
          logo: applepiLogo,
          top: 40,
          bottom: 39,
        }
      ],
      qna: [
        {
          question: "면접 날짜는 언제인가요?",
          answer: "동아리별로 상이합니다.<br/>교실에 부착된 포스터와<br/>동아리 페이스북 페이지를 참고해주세요.",
          style: { marginLeft: 0 }
        },
        {
          question: "동아리 이중 지원은 불가능한가요?",
          answer: "소프트웨어과, 멀티미디어과 동아리 <br/>이중 지원이 가능하지만 동시 합격의 경우<br/>멀티미디어과 동아리에 우선 배정됩니다!"
        },
        {
          question: "포트폴리오 받나요?",
          answer: "동아리마다 상이하므로 지원을 원하는<br/>동아리 페이지로 문의해주세요.<br/>내는 경우에도 너무 무리해서<br/>제작할 필요는 없습니다!"
        },
        {
          question: "신환회가 무엇인가요?",
          answer: "신환회는 ‘신입생 환영회’의 준말로,<br/>날을 정해 동아리 부원들과의<br/>친목을 다지는 연례 행사입니다!",
          style: { marginLeft: 0 }
        },
        {
          question: "노트북이 꼭 필요한가요?",
          answer: "동아리에 쓰는 용도 외에도 방대한 양의<br/>과제로 인해 필요한 경우가 많습니다ㅠㅠ<br/>하지만, 노트북 소지가 필수는 아니므로<br/>신중해서 고르시는게 좋겠죠??"
        },
        {
          question: "더 궁금한 거 있는데..",
          answer: "동아리별 페이스북 페이지는 언제나<br/>열려있어요!! 궁금한 게 있다면<br/>지금 바로 연락주세요!!"
        }
      ],
      clubStatus: 0
    }
  }

  render(){
    const { clubs, qna, clubStatus } = this.state;
    return(
      <Container>
        <HeaderComponent />
        <IntroComponent/>
        <ScrollDownWrap>
          <ScrollDownText>SCROLL DOWN</ScrollDownText>
          <ScrollDownImage src={scrollDown}/>
        </ScrollDownWrap>
        <MainIllust src={mainIllust} />
        <MembersWrap>
          <Title>MEMBERS</Title>
          <MembersContent>
            <img src={scrollLeftIcon} style={{ position: "absolute", top: 1480, left: 100 }} alt="" onClick={() => this.setState({ clubStatus: 0 })} />
            <ClubsWrap>
              {clubs.map((item, index) => (
                <ClubComponent
                  to={item.to}
                  content={item.content}
                  logo={item.logo}
                  key={index}
                  style={item.style}
                  top={item.top}
                  bottom={item.bottom}
                  clubStatus={clubStatus} />
              ))}
            </ClubsWrap>
            <img src={scrollRighttIcon} style={{ position: "absolute", top: 1480, right: 100 }} alt="" onClick={() => this.setState({ clubStatus: 1 })} />
          </MembersContent>
          <DotWrap>
            <Dot style={clubStatus === 0 ? { backgroundColor: "#3f3d56" } : { backgroundColor: "#888888"}}/>
            <Dot style={clubStatus === 1 ? { backgroundColor: "#3f3d56" } : { backgroundColor: "#888888"}}/>
          </DotWrap>
        </MembersWrap>
        <QnaWrap>
          <Title style={{ marginTop: 171, marginBottom: 62 }}>QNA</Title>
          <QnaContent>
            {qna.map((item, index) => (
              <QnaComponent question={item.question} answer={item.answer} style={item.style} key={index} />
            ))}
          </QnaContent>
        </QnaWrap>
        <FooterComponent />
      </Container>
    )
  }
}

export default Home;