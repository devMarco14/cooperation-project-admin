import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const CafeContents = () => {
  return (
    <StyledContents>
      <Header />
      <div>cafe</div>
    </StyledContents>
  );
};

const StyledContents = styled.section`
  width: 85vw;
  height: 100vh;
`;

export default CafeContents;
