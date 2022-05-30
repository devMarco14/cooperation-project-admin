import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Contents = () => {
  return (
    <StyledContents>
      <Header />
      contents
    </StyledContents>
  );
};

const StyledContents = styled.section`
  width: 80vw;
  height: 100vh;
  border: 1px solid black;
`;
export default Contents;