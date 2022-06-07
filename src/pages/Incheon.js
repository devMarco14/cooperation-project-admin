import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sider from './Sider';
import Contents from './Contents';

const Incheon = () => {
  const [incheonDataList, setIncheonDataList] = useState({
    total_charger: 0,
    communication_abnomal_charger: 0,
    ready_charger: 0,
    charging_charger: 0,
    suspending_charger: 0,
    inspecting_charger: 0,
    not_confirmed_charger: 0,
  });

  console.log('dataList::', incheonDataList);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://54.180.104.23:8000/evs/admin?regions=인천')
        .then(res => res.json())
        .then(res =>
          setIncheonDataList(res.results[0].chargers.count_of_status)
        );
    };
    fetchData();
    setInterval(() => {
      fetchData();
    }, 60000);
  }, []);
  return (
    <StyledMain>
      <Sider />
      <Contents data={incheonDataList} />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export default Incheon;
