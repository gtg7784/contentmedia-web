import * as React from 'react';
import { observer, inject } from 'mobx-react';
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
  line-height: 1.4;
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

interface Props {
  MirStore: ClubStoreType;
};
interface State { };

@inject('MirStore')
@observer
class Mir extends React.Component<Props, State>{
  render(){
    const { MirStore: { data } } = this.props;
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
          {data.map((item, index) => (
            <ArtworkComponent
              name="mir"
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
        <FooterComponent/>
      </Container>
    )
  }
}

export default Mir;