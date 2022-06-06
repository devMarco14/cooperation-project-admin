import React from 'react';
import styled from 'styled-components';
import DonutGraph from './components/DonutGraph';
import PastData from './components/PastData';
import RateOfChange from './components/RateOfChange';
import TotalBarGraph from './components/TotalBarGraph';
import Header from './Header';

const Contents = ({ data }) => {
  return (
    <StyledContents>
      <Header />
      <StyledTopGraph>
        <DonutGraph data={data} />
        <TotalBarGraph data={data} />
      </StyledTopGraph>
      <StyledBottomGraph>
        <PastData />
        <RateOfChange />
      </StyledBottomGraph>
    </StyledContents>
  );
};

const StyledContents = styled.section`
  width: 80vw;
  height: 100vh;
`;

const StyledTopGraph = styled.div`
  display: flex;
`;

const StyledBottomGraph = styled.div`
  display: flex;
`;
export default Contents;
