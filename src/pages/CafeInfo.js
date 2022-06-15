import React from 'react';
import Sider from './Sider';
import styled from 'styled-components';
import CafeContents from './CafeContents';

const CafeInfo = () => {
  return (
    <StyledMain>
      <Sider />
      <CafeContents />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export default CafeInfo;
