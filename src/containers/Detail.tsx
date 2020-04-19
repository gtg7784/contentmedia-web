import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import HeaderComponent from 'components/HeaderComponent';

const Container = styled.div`
  min-width: 1440px;
  height: 100%;
  background: #f4f8fc;
  min-height: 100vh;
`;
const ContentWrap = styled.div`
  width: calc(100% - 320px);
  padding: 0px 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 140px;
`;
const ArtworkWrap = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileWrap = styled.div`
  width: 50%;
  max-width: 512px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
`;
const Name = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  color: #222222;
`;
const Email = styled.p`
  margin-top: 0px;
  margin-bottom: 34px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.6px;
  text-align: right;
  color: #888888;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: right;
  color: #3f3d56;
  line-height: 1.52;
`;

interface Props { 
  AunStore: ClubStoreType;
  JunrStore: ClubStoreType;
  MirStore: ClubStoreType
  TateStore: ClubStoreType;
  VfriendsStore: ClubStoreType;
  match?: {
    params: {
      type: clubs;
      id: number;
    }
  };
}
interface State {
  data?: DataType;
  type: clubs;
}

@inject('AunStore', 'JunrStore', 'MirStore', 'TateStore', 'VfriendsStore')
@observer
class Detail extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);

    this.state = {
      type: undefined,
    }
  }
  
  componentDidMount(){
    const { AunStore, JunrStore, MirStore, TateStore, VfriendsStore, match: { params: { type, id }}} = this.props;

    window.scrollTo(0, 0);

    let clubData: ClubStoreType;
    
    if(type === "aun") {
      clubData = AunStore;
    } else if (type === "junr") {
      clubData = JunrStore;
    } else if (type === "mir") {
      clubData = MirStore;
    } else if (type === "tate") {
      clubData = TateStore;
    } else if (type === "vfriends") {
      clubData = VfriendsStore
    }
    
    const json = JSON.stringify(clubData.data[+id]);

    this.setState({
      type: type,
      data: JSON.parse(json).data
    });
  }
  
  render(){
    const { type, data } = this.state;

    return(
      <Container>
        <HeaderComponent type={type}/>
        <ContentWrap>
          <ArtworkWrap>
            {data && data.images.map((item: string, index: number) => (
              <Image src={item} alt="" key={index}/>
            ))}
            {data && data.link && <ReactPlayer url={data.link} width="600px" height="400px" />}
          </ArtworkWrap>
          <ProfileWrap>
            <Name>{data && data.profile.name}</Name>
            <Email>{data && data.profile.email}</Email>
            <Description dangerouslySetInnerHTML={{ __html: data && data.profile.description }}/>
          </ProfileWrap>
        </ContentWrap>
      </Container>
    )
  }
}

export default Detail;