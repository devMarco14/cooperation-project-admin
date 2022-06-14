import React from 'react';
import styled from 'styled-components';
import PastData from './components/PastData';
import RateOfChange from './components/RateOfChange';
import TotalBarGraph from './components/TotalBarGraph';
import TotalPieGraph from './components/TotalPieGraph';
import Header from './Header';

const MainContents = ({ data, seoul, gyeonggi, incheon }) => {
  return (
    <StyledContents>
      <Header />
      <StyledTopGraph>
        <TotalPieGraph
          data={data}
          seoul={seoul}
          gyeonggi={gyeonggi}
          incheon={incheon}
        />
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
  width: 85vw;
  height: 100vh;
`;

const StyledTopGraph = styled.div`
  display: flex;
`;

const StyledBottomGraph = styled.div`
  display: flex;
`;
export default MainContents;
