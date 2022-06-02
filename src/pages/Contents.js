import React from 'react';
import styled from 'styled-components';
import DonutGraph from './components/DonutGraph';
import PastData from './components/PastData';
import TotalBarGraph from './components/TotalBarGraph';
import Header from './Header';

const Contents = () => {
  return (
    <StyledContents>
      <Header />
      <StyledTopGraph>
        <DonutGraph />
        <TotalBarGraph />
      </StyledTopGraph>
      <StyledBottomGraph>
        <PastData />
      </StyledBottomGraph>
    </StyledContents>
  );
};

const StyledContents = styled.section`
  width: 80vw;
  height: 100vh;
  border: 1px solid black;
`;

const StyledTopGraph = styled.div`
  display: flex;
`;

const StyledBottomGraph = styled.div`
  display: flex;
`;
export default Contents;
