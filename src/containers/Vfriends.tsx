import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

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
  line-height: 1.4;
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
  VfriendsStore: ClubStoreType;
}
interface State { }

@inject('VfriendsStore')
@observer
class Vfriends extends React.Component<Props, State> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { VfriendsStore: { data } } = this.props;
    return (
      <Container>
        <HeaderComponent type="vfriends" />
        <ReactPlayer url={vfirendsVideo} width="1440px" height="810px" playing id="home" />
        <Bar />
        <Title id="intro">INTRODUCE</Title>
        <Illust src={vfriendsIllust} alt="" />
        <Description>
          v.friends는 디자인의 즐거움을
          <br />
          다양한 사람들과 나누며 성장하는 곳으로,
          <br />
          콘텐츠디자인과 &ldquo;디자인 교육 봉사 동아리&rdquo;입니다.
          <br />
          여러가지 디자인을 배움과 동시에 아는 것을 공유합니다.
          <br />
          <br />
          v.friends는 2019년 멀티미디어과
          <br />
          신입생 특별교육을 시작으로 1, 2기 자율동아리로 활동을 했으며,
          <br />
          2020년 학과명 변경을 기점으로
          <br />
          콘텐츠다자인과 소속동아리가 되었습니다.
          <br />
          <br />
          v.friends에선 포토샵, 일러스트레이터, XD, 인디자인,
          <br />
          에프터 이펙트 등 다양한 디자인 툴을 배울 수 있습니다.
          <br />
          그리고 증진된 디자인 능력으로 다른 사람을 가르치면서
          <br />
          스피치 능력도 기를 수 있습니다.
        </Description>
        <Title id="activity">activities</Title>
        <PrizeWrap>
          <PrizeComponent title={schoolTitle} number={schoolAward} />
          <PrizeComponent title={suburbTitle} number={suburbAward} />
        </PrizeWrap>
        <WikiWrap href="https://sunrinwiki.layer7.kr/index.php/V.friends">
          <WikiText>VIEW MORE</WikiText>
          <img src={arrowRight} alt="" />
        </WikiWrap>
        <Title id="artworks">ARTWORKS</Title>
        <ArtworkWrap>
          {data.map((item, index) => (
            <ArtworkComponent
              name="vfriends"
              img={item.thumbnail}
              title={item.title}
              type={item.type}
              description={item.description}
              style={item.style}
              key={item.title}
              index={index}
            />
          ))}
        </ArtworkWrap>
        <FooterComponent />
      </Container>
    );
  }
}

export default Vfriends;
