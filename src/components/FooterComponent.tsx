import * as React from 'react';
import styled from 'styled-components';

import sunrinIcon from 'assets/footer.svg';
import youtube from 'assets/youtube.svg';
import facebook from 'assets/facebook.svg';
import sunrin from 'assets/sunrinicon.svg';

const Container = styled.footer`
  width: 100%;
  padding-top: 50px;
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Logo = styled.img`
  margin-bottom: 14px;
`;
const Text = styled.p`
  margin: 0px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #3f3d56;
  line-height: 1.6;
`;
const BoldText = styled.span`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.2px;
  margin-bottom: 6px;
`;
const IconWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
const IconButton = styled.a`
  width: 42px;
  height: 42px;
  background-color: #fff;
  border-radius: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: ${(props: StyleProps) => props.width};
  height: ${(props: StyleProps) => props.height};
`;

interface StyleProps {
  width: string;
  height: string;
}
interface Props { }

const FooterComponent: React.FC<Props> = () => (
  <Container>
    <ItemWrap style={{ marginRight: 164 }}>
      <Logo src={sunrinIcon} alt="" />
      <Text>
        © 2020 선린인터넷고등학교 멀티미디어과
        {' '}
        <br />
        All Rights Reserved.
        <br />
        Designed by MINKIM
        <br />
        Developed by TaeGeon Go
        <br />
      </Text>
    </ItemWrap>
    <ItemWrap style={{ marginRight: 60 }}>
      <BoldText>선린인터넷고등학교 콘텐츠디자인과</BoldText>
      <Text>
        서울특별시 용산구 원효로97길 33-4
        <br />
        선린인터넷고등학교
        <br />
        3호관 2층 콘텐츠디자인과
        <br />
        Tel. 713-6213  |  Fax. 704-0960
        <br />
      </Text>
    </ItemWrap>
    <ItemWrap style={{ marginRight: 98 }}>
      <BoldText>시연회 제작</BoldText>
      <Text>
        강민지 김나현 김민
        {' '}
        <br />
        고태건 남민우 손성민
        {' '}
        <br />
        장채림 정한비 최가은
        {' '}
        <br />
        최서연 최정규
        {' '}
        <br />
      </Text>
    </ItemWrap>
    <IconWrap>
      <IconButton style={{ marginRight: 32 }} href="https://www.youtube.com/channel/UCTuj8x2de_3v6lxxFw_whpw">
        <Icon src={youtube} alt="" width="22px" height="16px" />
      </IconButton>
      <IconButton style={{ marginRight: 32 }} href="https://www.facebook.com/선린인터넷고등학교-콘텐츠디자인과-시연회-106949140954012/">
        <Icon src={facebook} alt="" width="10px" height="22px" />
      </IconButton>
      <IconButton href="http://sunrint.hs.kr/index.do">
        <Icon src={sunrin} alt="" width="16px" height="22px" />
      </IconButton>
    </IconWrap>
  </Container>
);

export default FooterComponent;
