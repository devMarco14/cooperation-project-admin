import React from 'react';
import styled from 'styled-components';

const EvTextInfo = () => {
  return (
    <StyledEvInfo>
      <StyledEvCharger>
        <StyledInfo>전체 충전기:</StyledInfo>
        <StyledNumber>100</StyledNumber>
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>충전대기:</StyledInfo>
        <StyledNumber>30</StyledNumber>
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>충전중:</StyledInfo>
        <StyledNumber>40</StyledNumber>
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>점검중:</StyledInfo>
        <StyledNumber>10</StyledNumber>
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>운영중지:</StyledInfo>
        <StyledNumber>5</StyledNumber>
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>통신이상:</StyledInfo>
        <StyledNumber>5</StyledNumber>
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>상태미확인:</StyledInfo>
        <StyledNumber>10</StyledNumber>
      </StyledEvCharger>
    </StyledEvInfo>
  );
};

const StyledEvInfo = styled.section`
  border: 1px solid #969b9e;
  border-radius: 5px;
  font-size: 14px;
  color: #969b9e;
`;

const StyledEvCharger = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 10px 0 10px;
`;

const StyledInfo = styled.span``;

const StyledNumber = styled.span``;

export default EvTextInfo;
