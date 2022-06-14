import { React, useState } from 'react';
import styled from 'styled-components';
import ECharts from 'echarts-for-react';

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
        data: [80, 75, 85, 80],
        type: 'line',
        lineStyle: {
          normal: {
            color: 'blue',
          },
        },
      },
      {
        data: [20, 25, 15, 20],
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
      <StyledChart option={options} />
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
