import React from 'react';
import styled from 'styled-components';
import Sider from './Sider';
import Contents from './Contents';

const Main = () => {
  return (
    <StyledMain>
      <Sider />
      <Contents />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export default Main;
