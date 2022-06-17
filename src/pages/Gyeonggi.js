import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sider from './Sider';
import Contents from './Contents';
import { initialData } from '../model/data';

const Gyeonggi = () => {
  const [gyeonggiDataList, setGyeonggiDataList] = useState(initialData);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch('https://maze-server.ml/evs/admin?regions=경기')
  //       .then(res => res.json())
  //       .then(res =>
  //         setGyeonggiDataList(res.results[0].chargers.count_of_status)
  //       );
  //   };
  //   fetchData();
  //   setInterval(() => {
  //     fetchData();
  //   }, 60000);
  // }, []);

  return (
    <StyledMain>
      <Sider />
      <Contents data={gyeonggiDataList} />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export default Gyeonggi;
