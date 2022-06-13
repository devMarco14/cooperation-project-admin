import React, { useState } from 'react';
import styled from 'styled-components';
import ECharts from 'echarts-for-react';

const TotalPieGraph = ({ data }) => {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: '76%',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: Math.round((1048 / 2000) * 100), name: '서울' },
          { value: Math.round((735 / 2000) * 100), name: '경기' },
          { value: Math.round((580 / 2000) * 100), name: '인천' },
        ],
      },
    ],
  });

  return (
    <StyledGraphBox>
      <StyledPie>
        <ECharts option={options} />
      </StyledPie>
    </StyledGraphBox>
  );
};

const StyledGraphBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
`;

const StyledPie = styled.div`
  width: 75%;
`;

export default TotalPieGraph;
