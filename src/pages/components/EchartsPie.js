import React, { useState } from 'react';
import styled from 'styled-components';
import EChartsReact from 'echarts-for-react';

const EchartsDonut = () => {
  const [options, setOptions] = useState({
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,

        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: 'red',
            borderWidth: 1,
            borderColor: 'red',
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: [
          {
            value: Math.round((70 / 1000) * 100),
            name: '충전대기',
            title: {
              offsetCenter: ['0%', '15%'],
              fontSize: '20',
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['0%', '0%'],
              fontSize: '40',
            },
          },
        ],

        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 20,
          color: 'gray',
          formatter: '{value}%',
        },
      },
    ],
  });

  return (
    <StyledDonutGraph>
      <EChartsReact option={options} />
    </StyledDonutGraph>
  );
};

const StyledDonutGraph = styled.span``;

export default EchartsDonut;
