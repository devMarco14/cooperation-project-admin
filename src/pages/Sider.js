import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import SiderButtons from './components/SiderButton';
import CityInfo from '../CityInfo';
import TotalEvTextInfo from './components/TotalEvTextInfo';

const Sider = () => {
  return (
    <StyledSider>
      <StyledLogo>
        <StyledLogoImg src="images/Main/mazelogo.png" />
      </StyledLogo>
      {CityInfo.map((value, i) => (
        <SiderButtons key={i} value={value} />
      ))}
      <StyledInfo>
        <TotalEvTextInfo />
      </StyledInfo>
    </StyledSider>
  );
};

const StyledSider = styled.section`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 100vh;
  background-color: beige;
  box-shadow: 1px 1px 3px 3px #dadce0;
  align-items: center;
`;

const StyledLogo = styled.div`
  margin-top: 20px;
`;

const StyledLogoImg = styled.img`
  width: 80px;
`;

const StyledInfo = styled.div`
  width: 75%;
  margin-top: 100px;
`;
export default Sider;
