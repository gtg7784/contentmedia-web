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
  width: 50%;
  max-width: 512px;
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
`;

interface Props { 
  DetailStore: DetailStoreType;
  match: {
    params: {
      type: clubs;
    }
  };
}
interface State {}

@observer
@inject('DetailStore')
class Detail extends React.Component<Props, State>{
  render(){
    const { match: { params: { type }}, DetailStore: { data }} = this.props;
    return(
      <Container>
        <HeaderComponent type={type}/>
        <ContentWrap>
          <ArtworkWrap>
            {data.images.map((item, index) => (
              <img src={item} alt="" key={index}/>
            ))}
            {data.link && <ReactPlayer url={data.link} width="600px" height="400px" />}
          </ArtworkWrap>
          <ProfileWrap>
            <Name>{data.profile.name}</Name>
            <Email>{data.profile.email}</Email>
            <Description dangerouslySetInnerHTML={{ __html: data.profile.description }}/>
          </ProfileWrap>
        </ContentWrap>
      </Container>
    )
  }
}

export default Detail;