import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import EvTextInfo from './EvTextInfo';
import ECharts from 'echarts-for-react';
import TotalEvTextInfo from './TotalEvTextInfo';
import { initialData } from '../../model/data';

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
  const [dataList, setDataList] = useState(initialData);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        'http://54.180.104.23:8000/evs/admin?regions=서울&regions=경기&regions=인천'
      )
        .then(res => res.json())
        .then(res => {
          let data = {
            total_charger: 0,
            communication_abnomal_charger: 0,
            ready_charger: 0,
            charging_charger: 0,
            suspending_charger: 0,
            inspecting_charger: 0,
            not_confirmed_charger: 0,
          };

          res.results.forEach(el => {
            data.total_charger =
              data.total_charger + el.chargers.count_of_status.total_charger;
            data.communication_abnomal_charger =
              data.communication_abnomal_charger +
              el.chargers.count_of_status.communication_abnomal_charger;
            data.ready_charger =
              data.ready_charger + el.chargers.count_of_status.ready_charger;
            data.charging_charger =
              data.charging_charger +
              el.chargers.count_of_status.charging_charger;
            data.suspending_charger =
              data.suspending_charger +
              el.chargers.count_of_status.suspending_charger;
            data.inspecting_charger =
              data.inspecting_charger +
              el.chargers.count_of_status.inspecting_charger;
            data.not_confirmed_charger =
              data.not_confirmed_charger +
              el.chargers.count_of_status.not_confirmed_charger;
          });

          setDataList(data);
        });
    };
    fetchData();
    setInterval(() => {
      fetchData();
    }, 60000);
  }, []);

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
          stack: 'x',
        },
        {
          data: [
            dataList.ready_charger,
            dataList.charging_charger,
            dataList.inspecting_charger,
            dataList.suspending_charger,
            dataList.communication_abnomal_charger,
            dataList.not_confirmed_charger,
          ],
          type: 'bar',
          itemStyle: {
            color: 'gray',
            opacity: '0.7',
          },
        },
      ],
    });
  }, [data, dataList]);

  return (
    <StyledTopBarGraph>
      <StyledEvTextInfo>
        <StyledText>
          <div>지역</div>
          <EvTextInfo data={data} />
        </StyledText>
        <StyledText>
          <div>전체</div>
          <TotalEvTextInfo />
        </StyledText>
      </StyledEvTextInfo>
      {options && (
        <StyledCharts>
          <ECharts option={options} />
        </StyledCharts>
      )}
    </StyledTopBarGraph>
  );
};

const StyledTopBarGraph = styled.div`
  width: 40%;
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

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
`;

export default TotalBarGraph;
