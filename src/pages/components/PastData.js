import { React, useState } from 'react';
import styled from 'styled-components';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const PastData = () => {
  const [options, setOptions] = useState({
    xAxis: {
      data: ['2 주전', '1 주전'],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [
          {
            value: 60,
            itemStyle: {
              color: '#1690ff',
            },
          },
          {
            value: 70,
            itemStyle: {
              color: '#1690ff',
            },
          },
        ],
        barWidth: '10%',
      },
      {
        type: 'bar',
        data: [
          {
            value: 40,
            itemStyle: {
              color: 'red',
            },
          },
          {
            value: 30,
            itemStyle: {
              color: 'red',
            },
          },
        ],
        barWidth: '10%',
      },
    ],
  });

  return (
    <StyledPastData>
      <StyledChart
        option={options}
        opts={{ renderer: 'svg', height: '250%' }}
      />
    </StyledPastData>
  );
};

const StyledPastData = styled.div`
  width: 70%;
  border: 1px solid black;
`;

const StyledChart = styled(ECharts)`
  width: 100%;
`;
export default PastData;
