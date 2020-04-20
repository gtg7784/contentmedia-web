import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import HeaderComponent from 'components/HeaderComponent';
import ArtworkComponent from 'components/ArtworkComponent';
import FooterComponent from 'components/FooterComponent';

import aunBanner from 'assets/aun/Banner.png';
import aunLogo from 'assets/aunLogo.svg';
import director from 'assets/aun/director.svg';
import subdirector from 'assets/aun/subdirector.svg';

import name1 from 'assets/aun/name1.svg';
import name2 from 'assets/aun/name2.svg';
import name3 from 'assets/aun/name3.svg';
import name4 from 'assets/aun/name4.svg';
import name5 from 'assets/aun/name5.svg';
import name6 from 'assets/aun/name6.svg';
import name7 from 'assets/aun/name7.svg';
import name8 from 'assets/aun/name8.svg';
import name9 from 'assets/aun/name9.svg';

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
  line-height: 1.4;
`;
const MemberWrap = styled.div`
  width: 100%;
  height: 446px;
  background-color: #ff703e;
  margin-top: 156px;
  margin-bottom: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
`;
const ArtworkWrap = styled.div`
  width: 1054px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 80px;
`;
const MemberRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;
const MemberItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 50px;
`;
const MemberDirectorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 70px;
`;
const MemberImage = styled.img`
  margin-bottom: 13.4px;
`;
const MemberPart = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: #f4f8fc;
`;
const DirectorBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 48px;
  background-color: #f4f8fc;
  border-top-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;
const MemberBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 36px;
  background-color: #f4f8fc;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

interface Props {
  AunStore: ClubStoreType;
}
interface State { }


@inject('AunStore')
@observer
class Aun extends React.Component<Props, State> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { AunStore: { data } } = this.props;
    return (
      <Container>
        <HeaderComponent type="aun" />
        <Banner src={aunBanner} id="home" />
        <Title id="intro">INTRODUCE</Title>
        <Logo src={aunLogo} />
        <Description>
          “아름다운 우리들의 내일을 위하여” 라는 슬로건을 가지고
          <br />
          활동하는 아우내는 선린인터넷고등학교의
          <br />
          실사영상 제작동아리입니다.
          <br />
          <br />
          설립 당시에는 연극부였으나,
          <br />
          더욱 다양한 종합예술로의 영역으로 확장하고자
          <br />
          실사영상 제작동아리로 변경해 새롭게 시작하였습니다.
          <br />
          <br />
          우리 동아리는 다양한 콘텐츠 제작을 통해
          <br />
          부원들의 아름다운 내일을 개척하고자 합니다.
          <br />
          <br />
          끊임없는 도전과 열정으로 많은 분께
          <br />
          아름다운 영상을 선사하기 위해 노력할 것입니다.
          <br />
        </Description>
        <Title id="member">MEMBERS</Title>
        <MemberWrap>
          <MemberRow>
            <MemberDirectorItem>
              <MemberImage src={director} alt="" />
              <MemberPart>연출, 촬영, 음향, 편집</MemberPart>
              <DirectorBack>
                <img src={name1} alt="" />
              </DirectorBack>
            </MemberDirectorItem>
            <MemberDirectorItem>
              <MemberImage src={subdirector} alt="" />
              <MemberPart>연기, 편집, 촬영</MemberPart>
              <DirectorBack>
                <img src={name2} alt="" />
              </DirectorBack>
            </MemberDirectorItem>
          </MemberRow>
          <MemberRow style={{ marginTop: 70 }}>
            <MemberItem>
              <MemberPart>연출, 촬영, 편집</MemberPart>
              <MemberBack>
                <img src={name3} alt="" />
              </MemberBack>
            </MemberItem>
            <MemberItem>
              <MemberPart>음향, 조명, VFX, 편집</MemberPart>
              <MemberBack>
                <img src={name4} alt="" />
              </MemberBack>
            </MemberItem>
            <MemberItem>
              <MemberPart>연출, 시나리오</MemberPart>
              <MemberBack>
                <img src={name5} alt="" />
              </MemberBack>
            </MemberItem>
          </MemberRow>
          <MemberRow style={{ marginTop: 63 }}>
            <MemberItem>
              <MemberPart>연기</MemberPart>
              <MemberBack>
                <img src={name6} alt="" />
              </MemberBack>
            </MemberItem>
            <MemberItem>
              <MemberPart>연기, 슬레이터, 스크립터</MemberPart>
              <MemberBack>
                <img src={name7} alt="" />
              </MemberBack>
            </MemberItem>
            <MemberItem>
              <MemberPart>촬영</MemberPart>
              <MemberBack>
                <img src={name8} alt="" />
              </MemberBack>
            </MemberItem>
            <MemberItem>
              <MemberPart>편집</MemberPart>
              <MemberBack>
                <img src={name9} alt="" />
              </MemberBack>
            </MemberItem>
          </MemberRow>
        </MemberWrap>
        <Title id="artworks">ARTWORKS</Title>
        <ArtworkWrap>
          {data.map((item, index) => (
            <ArtworkComponent
              name="aun"
              img={item.thumbnail}
              title={item.title}
              type={item.type}
              description={item.description}
              style={item.style}
              index={index}
              key={index}
            />
          ))}
        </ArtworkWrap>
        <FooterComponent />
      </Container>
    );
  }
}

export default Aun;
