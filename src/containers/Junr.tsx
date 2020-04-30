import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import HeaderComponent from 'components/HeaderComponent';
import PrizeComponent from 'components/PrizeComponent';
import ArtworkComponent from 'components/ArtworkComponent';
import FooterComponent from 'components/FooterComponent';

import logo from 'assets/junrLogo.svg';
import banner from 'assets/junr/banner.webm';
import schoolTitle from 'assets/junr/schoolTitle.svg';
import projectTitle from 'assets/junr/project.svg';
import schoolAward from 'assets/junr/schoolAward.svg';
import projectCount from 'assets/junr/6.svg';
import arrowRight from 'assets/arrowRight.svg';

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
  background-color: #8bbdd1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 156px;
`;
const ArtworkWrap = styled.div`
  width: 1054px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 80px;
`;
const WikiWrap = styled.a`
  border-radius: 12px;
  box-shadow: 0 0 16px 0 rgba(34, 34, 34, 0.1);
  background-color: #f4f8fc;
  padding: 16px 17px 15px 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 171px;
  margin-top: 90px;
  text-decoration: none;
`;
const WikiText = styled.span`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2.1px;
  color: #3f3d56;
  font-family: 'Bebas Neue', cursive;
  margin-right: 16px;
  text-decoration: none;
`;

interface Props {
  JunrStore: ClubStoreType;
}
interface State { }

@inject('JunrStore')
@observer
class Junr extends React.Component<Props, State> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { JunrStore: { data } } = this.props;
    return (
      <Container>
        <HeaderComponent type="junr" />
        <ReactPlayer url={banner} width="1440px" height="810px" playing id="home" />
        <Bar />
        <Title id="intro">INTRODUCE</Title>
        <Logo src={logo} alt="" />
        <Description>
          자의누리는 교내 최고의 영상 전문 동아리로
          {' '}
          <br />
          2020년도 현재까지 그 전통을 이어오고 있습니다.
          <br />
          자의누리에서는 애프터이펙트를 활용한 모션그래픽과
          {' '}
          <br />
          프리미어프로를 사용하는 실사 영상 촬영 및 편집을
          {' '}
          <br />
          배워 가실 수 있습니다.
          <br />
          <br />
          기초부터 시작하는 체계적인 커리큘럼과
          {' '}
          <br />
          12명의 선배와의 선후배 1:1 멘토링 시스템을 통해
          {' '}
          <br />
          확실하게 영상 감각과 실력을 향상시켜
          {' '}
          <br />
          나갈 수 있도록 노력하고 있습니다
          <br />
          또한 다양한 교내 교외의 공모전,
          {' '}
          <br />
          대회에 참여하고 수상 기록을 쌓아 나가실 수 있습니다
          <br />
        </Description>
        <Title id="activity">activities</Title>
        <PrizeWrap>
          <PrizeComponent title={schoolTitle} number={schoolAward} />
          <PrizeComponent title={projectTitle} number={projectCount} />
        </PrizeWrap>
        <WikiWrap href="https://sunrinwiki.layer7.kr/index.php/%EC%9E%90%EC%9D%98%EB%88%84%EB%A6%AC">
          <WikiText>VIEW MORE</WikiText>
          <img src={arrowRight} alt="" />
        </WikiWrap>
        <Title id="artworks">ARTWORKS</Title>
        <ArtworkWrap>
          {data.map((item, index) => (
            <ArtworkComponent
              name="junr"
              img={item.thumbnail}
              title={item.title}
              type={item.type}
              description={item.description}
              index={index}
              key={item.title}
            />
          ))}
        </ArtworkWrap>
        <FooterComponent />
      </Container>
    );
  }
}

export default Junr;
