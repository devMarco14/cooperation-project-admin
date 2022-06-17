# 기업협업 프로젝트

## 메이즈 주식회사
- admin page 작업

## 작업내용
- Main -지역 전체의 충전기 수
- Seoul, Gyeonggi, Incheon -각 지역의 충전기수
- Header -EV, cafe 의 페이지로 넘어가는 버튼 카페페이지는 만들어져 있으나 레이아웃은 없음
- Sider -전체와 각 지역으로 넘어가는 버튼과 충전기 전체의 정보를 가지고 있음 

## components
- components 폴더의 내용은 작업내용 각각의 작은 단위
- 재사용 components 들이 있음
- EChartsPie.js 파일은 지역 충전기정보의 그래프를 ant => Echarts   변경 작업중 

## error
- setInterval 메모리 누수 메모리 누수에 대한 이해도가 부족해 해결을 못함
- aws 배포시에 npm run build 가 안됨!<img width="568" alt="스크린샷 2022-06-17 오전 9 22 20" src="https://user-images.githubusercontent.com/99126860/174199695-fe7e3c21-7d6f-4fe4-acc3-4e1bb80b2861.png">
- 그래프의 여러가지 데이터를 map으로 해서 코드를 짧게 하고 싶었으나 여러 방법을 검색해보고 시도해봤으나 
