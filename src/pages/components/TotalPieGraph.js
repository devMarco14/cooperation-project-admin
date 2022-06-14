import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ECharts from 'echarts-for-react';
import PieGraphTitle from '../../PieGraphTitle';

const TotalPieGraph = ({ data, seoul, gyeonggi, incheon }) => {
  const [graph, setGraph] = useState([[]]);

  const [options, setOptions] = useState(null);

  useEffect(() => {
    setOptions({
      dataset: [
        {
          source: [
            ['City', 'Count', 'State'],
            ['서울', seoul.ready_charger, '충전대기'],
            ['경기', gyeonggi.ready_charger, '충전대기'],
            ['인천', incheon.ready_charger, '충전대기'],
            ['서울', seoul.charging_charger, '충전중'],
            ['경기', gyeonggi.charging_charger, '충전중'],
            ['인천', incheon.charging_charger, '충전중'],
            ['서울', seoul.inspecting_charger, '점검중'],
            ['경기', gyeonggi.inspecting_charger, '점검중'],
            ['인천', incheon.inspecting_charger, '점검중'],
            ['서울', seoul.suspending_charger, '운영중지'],
            ['경기', gyeonggi.suspending_charger, '운영중지'],
            ['인천', incheon.suspending_charger, '운영중지'],
            ['서울', seoul.communication_abnomal_charger, '통신이상'],
            ['경기', gyeonggi.communication_abnomal_charger, '통신이상'],
            ['인천', incheon.communication_abnomal_charger, '통신이상'],
            ['서울', seoul.not_confirmed_charger, '상태미확인'],
            ['경기', gyeonggi.not_confirmed_charger, '상태미확인'],
            ['인천', incheon.not_confirmed_charger, '상태미확인'],
          ],
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'State', value: '충전대기' },
          },
        },
        {
          transform: {
            type: 'filter',

            config: { dimension: 'State', value: '충전중' },
          },
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'State', value: '점검중' },
          },
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'State', value: '운영중지' },
          },
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'State', value: '통신이상' },
          },
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'State', value: '상태미확인' },
          },
        },
      ],

      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          width: 220,
          name:
            '충전대기' +
            Math.round((data.ready_charger / data.total_charger) * 100) +
            '%',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['45%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          datasetIndex: 1,
        },
        {
          width: 220,
          name:
            '충전중' +
            Math.round((data.charging_charger / data.total_charger) * 100) +
            '%',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['175%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          datasetIndex: 2,
        },
        {
          width: 220,
          name:
            '점검중' +
            Math.round((data.inspecting_charger / data.total_charger) * 100) +
            '%',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['300%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          datasetIndex: 3,
        },
        {
          width: 220,
          name:
            '운영중지' +
            Math.round((data.suspending_charger / data.total_charger) * 100) +
            '%',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['45%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          datasetIndex: 4,
        },
        {
          width: 220,
          name:
            '통신이상' +
            Math.round(
              (data.communication_abnomal_charger / data.total_charger) * 100
            ) +
            '%',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['175%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          datasetIndex: 5,
        },
        {
          width: 220,
          name:
            '상태미확인' +
            Math.round(
              (data.not_confirmed_charger / data.total_charger) * 100
            ) +
            '%',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['300%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          datasetIndex: 6,
        },
      ],
    });
  }, [data, seoul, gyeonggi, incheon]);

  return (
    <StyledGraphBox>
      {/* {PieGraphTitle.map((value, i) => (
        <div key={i} value={value}>
          {value.title}
        </div>
      ))} */}
      {options && (
        <StyledPie>
          <ECharts option={options} style={{ height: '450px' }} />
        </StyledPie>
      )}
    </StyledGraphBox>
  );
};

const StyledGraphBox = styled.div`
  width: 70%;
`;

const StyledPie = styled.div`
  width: 100%;
`;

export default TotalPieGraph;
