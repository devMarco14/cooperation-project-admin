import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const DonutGraph = () => {
  return (
    <StyledGraphBox>
      <StyledGraphText>
        <StyledGraph type="circle" percent={30} width={150} strokeWidth={10} />
        <StyledText>충전대기</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={40}
          width={150}
          strokeWidth={10}
          strokeColor="green"
        />
        <StyledText>충전중</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={10}
          width={150}
          strokeWidth={10}
          strokeColor="orange"
        />
        <StyledText>점검중</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={5}
          width={150}
          strokeWidth={10}
          strokeColor="red"
        />
        <StyledText>운영중지</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={5}
          width={150}
          strokeWidth={10}
          strokeColor="yellow"
        />
        <StyledText>통신이상</StyledText>
      </StyledGraphText>
      <StyledGraphText>
        <StyledGraph
          type="circle"
          percent={10}
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
  border: 1px solid black;
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
