import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import SiderButtons from './components/SiderButton';
import CityInfo from '../CityInfo';
import EvTextInfo from './components/EvTextInfo';

const Sider = () => {
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
    <StyledSider>
      <StyledLogo>MAZE</StyledLogo>
      {CityInfo.map((value, i) => (
        <SiderButtons key={i} value={value} />
      ))}
      <StyledInfo>
        <EvTextInfo data={dataList} />
      </StyledInfo>
    </StyledSider>
  );
};

const StyledSider = styled.section`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  background-color: #1d2733;
  box-shadow: 1px 1px 3px 3px #dadce0;
  align-items: center;
`;

const StyledLogo = styled.div`
  margin-top: 20px;
  font-size: large;
`;

const StyledInfo = styled.div`
  width: 75%;
  margin-top: 100px;
`;
export default Sider;
