import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { initialData } from '../../model/data';

const TotalEvTextInfo = () => {
  const [dataList, setDataList] = useState(initialData);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        'https://maze-server.ml/evs/admin?regions=서울&regions=경기&regions=인천'
      )
        .then(res => res.json())
        .then(res => {
          let data = {
            total_charger: 0,
            communication_abnomal_charger: 0,
            ready_charger: 0,
            charging_charger: 0,
            suspending_charger: 0,
            inspecting_charger: 0,
            not_confirmed_charger: 0,
          };

          res.results.forEach(el => {
            data.total_charger =
              data.total_charger + el.chargers.count_of_status.total_charger;
            data.communication_abnomal_charger =
              data.communication_abnomal_charger +
              el.chargers.count_of_status.communication_abnomal_charger;
            data.ready_charger =
              data.ready_charger + el.chargers.count_of_status.ready_charger;
            data.charging_charger =
              data.charging_charger +
              el.chargers.count_of_status.charging_charger;
            data.suspending_charger =
              data.suspending_charger +
              el.chargers.count_of_status.suspending_charger;
            data.inspecting_charger =
              data.inspecting_charger +
              el.chargers.count_of_status.inspecting_charger;
            data.not_confirmed_charger =
              data.not_confirmed_charger +
              el.chargers.count_of_status.not_confirmed_charger;
          });

          setDataList(data);
        });
    };
    fetchData();
    setInterval(() => {
      fetchData();
    }, 60000);
  }, []);

  return (
    <StyledEvInfo>
      <StyledEvCharger>
        <StyledInfo>전체 충전기:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>{dataList.total_charger.toLocaleString()}</StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>충전대기:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>{dataList.ready_charger.toLocaleString()}</StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>충전중:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>
            {dataList.charging_charger.toLocaleString()}
          </StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>점검중:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>
            {dataList.inspecting_charger.toLocaleString()}
          </StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>운영중지:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>
            {dataList.suspending_charger.toLocaleString()}
          </StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>통신이상:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>
            {dataList.communication_abnomal_charger.toLocaleString()}
          </StyledNumber>
        )}
      </StyledEvCharger>
      <StyledEvCharger>
        <StyledInfo>상태미확인:</StyledInfo>
        {dataList.total_charger !== 0 && (
          <StyledNumber>
            {dataList.not_confirmed_charger.toLocaleString()}
          </StyledNumber>
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

export default TotalEvTextInfo;
