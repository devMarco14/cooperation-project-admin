import React, { useState } from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
// import EchartsPie from './EchartsPie';

const DonutGraph = ({ data }) => {
  const {
    charging_charger,
    communication_abnomal_charger,
    inspecting_charger,
    not_confirmed_charger,
    ready_charger,
    suspending_charger,
    total_charger,
  } = data;

  return (
    <StyledGraphBox>
      {/* <EchartsPie /> */}
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={Math.round((ready_charger / total_charger) * 100)}
          width={150}
          strokeWidth={10}
        />
        <StyledText>충전대기</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={Math.round((charging_charger / total_charger) * 100)}
          width={150}
          strokeWidth={10}
          strokeColor="green"
        />
        <StyledText>충전중</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={Math.round((inspecting_charger / total_charger) * 100)}
          width={150}
          strokeWidth={10}
          strokeColor="orange"
        />
        <StyledText>점검중</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={Math.round((suspending_charger / total_charger) * 100)}
          width={150}
          strokeWidth={10}
          strokeColor="red"
        />
        <StyledText>운영중지</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={Math.round(
            (communication_abnomal_charger / total_charger) * 100
          )}
          width={150}
          strokeWidth={10}
          strokeColor="yellow"
        />
        <StyledText>통신이상</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={Math.round((not_confirmed_charger / total_charger) * 100)}
          width={150}
          strokeWidth={10}
          strokeColor="yellow"
        />
        <StyledText>상태미확인</StyledText>
      </StyledGraphText>
    </StyledGraphBox>
  );
};

const StyledGraphBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  /* 
  :hover {
    box-shadow: 1px 1px 3px 3px #dadce0;
    width: 120%;
    background-color: rgba(245, 245, 220, 0.5);
  } */
`;

const StyledGraphText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px 0 7px 0;
`;

const StyledGraph = styled(Progress)`
  .ant-progress-text {
    color: gray;
  }
`;

const StyledText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #969b9e;
`;
export default DonutGraph;
