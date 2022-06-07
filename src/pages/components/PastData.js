import { React, useState } from 'react';
import styled from 'styled-components';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const PastData = () => {
  const [options, setOptions] = useState({
    xAxis: {
      type: 'category',
      data: ['1주전', '2주전', '3주전', '4주전'],
    },

    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [180, 130, 190, 200],
        type: 'line',
        lineStyle: {
          normal: {
            color: 'blue',
          },
        },
      },
      {
        data: [120, 170, 110, 100],
        type: 'line',
        lineStyle: {
          normal: {
            color: 'red',
          },
        },
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
  height: 230px;
  :hover {
    box-shadow: 1px 1px 3px 3px #dadce0;
  }
`;

const StyledChart = styled(ECharts)`
  width: 100%;
`;
export default PastData;
