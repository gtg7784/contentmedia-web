import * as React from 'react';
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

import artwork1 from 'assets/junr/artwork1.png';
import artwork2 from 'assets/junr/artwork2.png';
import artwork3 from 'assets/junr/artwork3.png';
import artwork4 from 'assets/junr/artwork4.png';
import artwork5 from 'assets/junr/artwork5.png';
import artwork6 from 'assets/junr/artwork6.png';
import artwork7 from 'assets/junr/artwork7.png';
import artwork8 from 'assets/junr/artwork8.png';
import artwork9 from 'assets/junr/artwork9.png';
import artwork10 from 'assets/junr/artwork10.png';
import artwork11 from 'assets/junr/artwork11.png';
import artwork12 from 'assets/junr/artwork12.png';
import artwork13 from 'assets/junr/artwork13.png';
import artwork14 from 'assets/junr/artwork14.png';
import artwork15 from 'assets/junr/artwork15.png';
import artwork16 from 'assets/junr/artwork16.png';

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
  data: DataType;
}
interface Props { };
interface State {
  artworks: Array<Artwork>;
};

class Junr extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);

    this.state = {
      artworks: [
        {
          img: artwork1,
          title: "자의누리 타이포 합작_눈",
          type: "MOTION GRAPHICS",
          description: "자의누리 11기 학생들이 진행한 키네틱 타이포그래피입니다",
          style: { marginLeft: 0 },
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=U8HVOlVVW-4"
          }
        },
        {
          img: artwork2,
          title: "게임중독 질병화 모션_남민우",
          type: "MOTION GRAPHICS",
          description: "2019년도 그래픽 공모전 모션그래픽 분야 동상 수상작입니다. 일러스트로 만든 캐릭터와 배경 등을 애프터 이펙트로 모션을 주어서 만든 …",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=Ag8ds27l0SE"
          }
        },
        {
          img: artwork3,
          title: "슬라이드 디자인_남민우",
          type: "MOTION GRAPHICS",
          description: "슬라이드 디자인 영상입니다. 각 슬라이드들이 주로 쇼릴 형식으로 넘어갑니다. 이렇기에 장면 장면이 넘어가는 트렌지션이 영상 흐름에 …",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=j4AJh_AWECQ"
          }
        },
        {
          img: artwork4,
          title: "인트로 디자인_남민우",
          type: "MOTION GRAPHICS",
          description: "인트로 모션그래픽 영상입니다. 임팩트있고 트렌디한 분위기로 제작한 작품입니다. 이 영상은 굉장히 짧은시간으로 구성되어 있어 정보…",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=9dsgnGlcjJE"
          }
        },
        {
          img: artwork5,
          title: "유튜브 인트로_남민우",
          type: "MOTION GRAPHICS",
          description: "저만의 유튜브를 만든다면 쓰게 될 인트로를 예상하여 만들어본 작품입니다. 애프터 이펙트로 제작한 영상으로 다른 사람들이 후회되는…",
          style: { marginLeft: 0 },
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=5VnAhI9uBA0"
          }
        },
        {
          img: artwork6,
          title: "ANIMATION_남민우",
          type: "MOTION GRAPHICS",
          description: "애프터 이펙트 연습을 위해 제작한 영상입니다. 기존과는 다른 느낌에 영상을 제작 해보려고 모작을 해보았습니다. 원작품은 영업비밀 …",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=hX8KR2mxH_k"
          }
        },
        {
          img: artwork7,
          title: "에어팟 프로 모작_남민우",
          type: "MOTION GRAPHICS",
          description: "에어팟 프로 광고를 모작한 영상입니다. 기존에 사용하지 않던 이펙트들을 많이 다루어 볼 수 있는 좋은 경험 이였습니다.",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
          }
        },
        {
          img: artwork8,
          title: "자의누리 브랜딩_남민우",
          type: "MOTION GRAPHICS",
          description: "이번 시연회에서 자의누리를 소개 할 목적으로 제작한  자의누리 셀프브랜딩 영상입니다. 리드미컬하고 트렌디한 노래와 그에 맞는 모션…",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=jeYWXOQ7Sac"
          }
        },
        {
          img: artwork9,
          title: "시나브로_문은빈",
          type: "MOVIE",
          description: "영상공모전 영화 부문 금상 수상작으로 청소년들의 도박 문제가 예전보다 심각해지고 있습니다. 제목 이름 시나브로 뜻 처럼 모르는 …",
          style: { marginLeft: 0 },
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=GHyQIkHRwxI"
          }
        },
        {
          img: artwork10,
          title: "카카오맵 광고_이주연",
          type: "MOTION GRAPHICS",
          description: "영상공모전 은상을 수상작입니다. 이 광고로 자주 애용하는 어플리케이션인 카카오맵을 광고하는 동시에, 특별하고 깐깐하게 선정된 테마…",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=4Jjr7upVieg"
          }
        },
        {
          img: artwork11,
          title: "인트로 디자인_이주연",
          type: "MOTION GRAPHICS",
          description: "나만의 인트로를 만들기위해 나의 머릿속안에 자리잡고있는 내가 좋아하는 것들을 이용하여 만들었습니다. 내 머릿속 생각들중 상징적인것…",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=gtCd0sj-xZI"
          }
        },
        {
          img: artwork12,
          title: "[3학년]119 Remix_김휘재",
          type: "MOTION GRAPHICS",
          description: "FICTIST의 Lilzyz님이 주최하신 대규모 합작에 참여하여 HAON 파트를 담당해 제작한 타이포그래피입니다.  저에게는 2019년의 시작을…",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=NVjtdzAfDUY",
          }
        },
        {
          img: artwork13,
          title: "[3학년]신재생에너지_김희서",
          type: "MOTION GRAPHICS",
          description: "그래픽공모전 금상 수상작입니다. 환경 오염이 심해지는 지구, 모든 생물들이 살아가는 자연을 인간이 스스로 무너뜨리고 있습니다. …",
          style: { marginLeft: 0 },
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=ygICQn2knSE"
          }
        },
        {
          img: artwork14,
          title: "[3학년]2020콘디과_이충혁",
          type: "MOTION GRAPHICS",
          description: "2020년도에 고등학교로 올라가는 중학교 3학년 학생들이 진학에 대해서 고민하고 있을 시기에 콘텐츠 디자인과를 홍보하는 목적으로 만든…",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=GfnSh4gzaBw"
          }
        },
        {
          img: artwork15,
          title: "[3학년]번아웃증후군_이충혁",
          type: "MOTION GRAPHICS",
          description: "2019년도 선린인터넷고등학교 그래픽 공모전 모션그래픽 부문에서 대상(1위)을 탄 작품입니다. 일러스트로 만든 캐릭터와 배경 등을 …",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=kaAVJgJvFa8"
          }
        },
        {
          img: artwork16,
          title: "[졸업]행복했을까허준호외3인",
          type: "MOVIE",
          description: "영상공모전 영화 부문 대상 수상작입니다.",
          data: {
            images: [],
            profile: {
              name: '',
              email: '',
              description: ''
            },
            link: "https://www.youtube.com/watch?v=V8r4OIdk9TY"
          }
        },
      ]
    }
  }
  render(){
    const { artworks } = this.state;
    return(
      <Container>
        <HeaderComponent type="junr"/>
        <ReactPlayer url={banner} width="1440px" height="810px" playing />
        <Bar />
        <Title>INTRODUCE</Title>
        <Logo src={logo} alt=""/>
        <Description>
          자의누리는 교내 최고의 영상 전문 동아리로 <br/>
          2020년도 현재까지 그 전통을 이어오고 있습니다. 
          <br/>
          자의누리에서는 애프터이펙트를 활용한 모션그래픽과 <br/>
          프리미어프로를 사용하는 실사 영상 촬영 및 편집을 <br/>
          배워 가실 수 있습니다.<br/>
          <br/>
          기초부터 시작하는 체계적인 커리큘럼과 <br/>
          12명의 선배와의 선후배 1:1 멘토링 시스템을 통해 <br/>
          확실하게 영상 감각과 실력을 향상시켜 <br/>
          나갈 수 있도록 노력하고 있습니다<br/>
          또한 다양한 교내 교외의 공모전, <br/>
          대회에 참여하고 수상 기록을 쌓아 나가실 수 있습니다<br/>
        </Description>
        <Title>activities</Title>
        <PrizeWrap>
          <PrizeComponent title={schoolTitle} number={schoolAward} />
          <PrizeComponent title={projectTitle} number={projectCount} />
        </PrizeWrap>
        <Title>ARTWORKS</Title>
        <ArtworkWrap>
          {artworks.map((item, index) => (
            <ArtworkComponent
              name="junr"
              img={item.img}
              title={item.title}
              type={item.type}
              description={item.description}
              style={item.style}
              data={item.data}
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

export default Junr;