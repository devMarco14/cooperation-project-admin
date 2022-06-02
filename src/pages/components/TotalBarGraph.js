import { React, useState } from 'react';
import styled from 'styled-components';
import EvTextInfo from './EvTextInfo';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const TotalBarGraph = () => {
  const [options, setOptions] = useState({
    xAxis: {
      type: 'category',
      data: ['대기', '충전', '점검', '중지', '이상', '미확인'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          {
            value: 30,
            itemStyle: {
              color: '#1690ff',
            },
          },
          {
            value: 40,
            itemStyle: {
              color: 'green',
            },
          },
          {
            value: 10,
            itemStyle: {
              color: 'orange',
            },
          },
          {
            value: 5,
            itemStyle: {
              color: 'red',
            },
          },
          {
            value: 5,
            itemStyle: {
              color: 'yellow',
            },
          },
          {
            value: 10,
            itemStyle: {
              color: 'yellow',
            },
          },
        ],
        type: 'bar',
      },
    ],
  });

  return (
    <StyledTopBarGraph>
      <EvTextInfo />
      <StyledCharts>
        <StyledChart
          option={options}
          opts={{ renderer: 'svg', height: '300%' }}
        />
      </StyledCharts>
    </StyledTopBarGraph>
  );
};

const StyledTopBarGraph = styled.div`
  width: 30%;
  border: 1px solid black;
`;

const StyledChart = styled(ECharts)``;

const StyledCharts = styled.div`
  width: 100%;
`;

export default TotalBarGraph;
