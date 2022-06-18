import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sider from './Sider';
import Contents from './Contents';
import { initialData } from '../model/data';

const Seoul = () => {
  const [seoulDataList, setSeoulDataList] = useState(initialData);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://maze-server.ml/evs/admin?regions=서울')
        .then(res => res.json())
        .then(res => setSeoulDataList(res.results[0].chargers.count_of_status));
    };
    fetchData();
    setInterval(() => {
      fetchData();
    }, 60000);
  }, []);

  return (
    <StyledMain>
      <Sider />
      <Contents data={seoulDataList} />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export default Seoul;

// * {
//   ::-webkit-scroller: none;
//   scrollwer-width: 0;
//   overflow-x: hidden;
// }
