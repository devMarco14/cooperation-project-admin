import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import EvTextInfo from './EvTextInfo';
import ECharts from 'echarts-for-react';

const TotalBarGraph = ({ data }) => {
  const {
    charging_charger,
    communication_abnomal_charger,
    inspecting_charger,
    not_confirmed_charger,
    ready_charger,
    suspending_charger,
  } = data;

  const [options, setOptions] = useState(null);

  useEffect(() => {
    setOptions({
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
              value: ready_charger,
              itemStyle: {
                color: '#1690ff',
                opacity: '0.7',
              },
            },
            {
              value: charging_charger,
              itemStyle: {
                color: 'green',
                opacity: '0.7',
              },
            },
            {
              value: inspecting_charger,
              itemStyle: {
                color: 'orange',
                opacity: '0.7',
              },
            },
            {
              value: suspending_charger,
              itemStyle: {
                color: 'red',
                opacity: '0.7',
              },
            },
            {
              value: communication_abnomal_charger,
              itemStyle: {
                color: 'yellow',
                opacity: '0.7',
              },
            },
            {
              value: not_confirmed_charger,
              itemStyle: {
                color: 'yellow',
                opacity: '0.7',
              },
            },
          ],
          type: 'bar',
        },
      ],
    });
  }, [data]);

  return (
    <StyledTopBarGraph>
      <StyledEvTextInfo>
        <EvTextInfo data={data} />
      </StyledEvTextInfo>
      <StyledCharts>
        {options && (
          <ECharts
            option={options}
            opts={{ renderer: 'svg', height: '300%' }}
          />
        )}
      </StyledCharts>
    </StyledTopBarGraph>
  );
};

const StyledTopBarGraph = styled.div`
  width: 30%;
`;

const StyledEvTextInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  :hover {
    box-shadow: 1px 1px 3px 3px #dadce0;
  }
`;

const StyledCharts = styled.div`
  width: 100%;
  :hover {
    box-shadow: 1px 1px 3px 3px #dadce0;
  }
`;

export default TotalBarGraph;
