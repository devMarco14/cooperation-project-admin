import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import SiderButtons from './components/SiderButton';
import CityInfo from './CityInfo';
import EvTextInfo from './components/EvTextInfo';

const Sider = () => {
  return (
    <StyledSider>
      <StyledLogo>MAZE</StyledLogo>
      {CityInfo.map((value, i) => (
        <SiderButtons key={i} value={value} />
      ))}
      <StyledInfo>
        <EvTextInfo />
      </StyledInfo>
    </StyledSider>
  );
};

const StyledSider = styled.section`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  align-items: center;
  border: 1px solid black;
`;

const StyledLogo = styled.div`
  margin-top: 20px;
  font-size: large;
`;

const StyledInfo = styled.div`
  width: 75%;
  margin-top: 100px;
`;
export default Sider;
