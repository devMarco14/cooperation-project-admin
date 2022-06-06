import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sider from './Sider';
import Contents from './Contents';
import { LoadingOutlined } from '@ant-design/icons';

const Main = () => {
  const [dataList, setDataList] = useState({
    total_charger: 0,
    communication_abnomal_charger: 0,
    ready_charger: 0,
    charging_charger: 0,
    suspending_charger: 0,
    inspecting_charger: 0,
    not_confirmed_charger: 0,
  });

  useEffect(() => {
    fetch(
      'http://54.180.104.23:8000/evs/admin?regions=서울&regions=경기&regions=인천'
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
  }, []);

  return (
    <StyledMain>
      <Sider />
      <Contents data={dataList} />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export default Main;
