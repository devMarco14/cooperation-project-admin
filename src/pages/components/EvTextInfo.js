import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const EvTextInfo = ({ data }) => {
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
    <StyledEvInfo>
      <StyledEvCharger>
        <StyledInfo>전체 충전기:</StyledInfo>
        {total_charger !== 0 && <StyledNumber>{total_charger}</StyledNumber>}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>충전대기:</StyledInfo>
        {total_charger !== 0 && <StyledNumber>{ready_charger}</StyledNumber>}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>충전중:</StyledInfo>
        {total_charger !== 0 && <StyledNumber>{charging_charger}</StyledNumber>}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>점검중:</StyledInfo>
        {total_charger !== 0 && (
          <StyledNumber>{inspecting_charger}</StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>운영중지:</StyledInfo>
        {total_charger !== 0 && (
          <StyledNumber>{suspending_charger}</StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>통신이상:</StyledInfo>
        {total_charger !== 0 && (
          <StyledNumber>{communication_abnomal_charger}</StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>상태미확인:</StyledInfo>
        {total_charger !== 0 && (
          <StyledNumber>{not_confirmed_charger}</StyledNumber>
        )}
      </StyledEvCharger>
    </StyledEvInfo>
  );
};

const StyledEvInfo = styled.section`
  border: 1px solid #969b9e;
  border-radius: 5px;
  font-size: 14px;
  color: #969b9e;
  padding: 5px 10px;
`;

const StyledEvCharger = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInfo = styled.span``;

const StyledNumber = styled.span``;

export default EvTextInfo;
