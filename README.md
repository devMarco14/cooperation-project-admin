# 기업협업 프로젝트

## 메이즈 주식회사
- admin page 작업

## 작업내용
- Main -지역 전체의 충전기 수
- <img width="1194" alt="스크린샷 2022-06-17 오전 9 39 17" src="https://user-images.githubusercontent.com/99126860/174200086-c538b8b0-1376-4652-808f-d1b9743d1a37.png">

- Seoul, Gyeonggi, Incheon -각 지역의 충전기수
- <img width="1202" alt="스크린샷 2022-06-17 오전 9 39 28" src="https://user-images.githubusercontent.com/99126860/174200100-7b61e3a6-e28e-4211-a617-208d5eb6d669.png">

- Header -EV, cafe 의 페이지로 넘어가는 버튼 카페페이지는 만들어져 있으나 레이아웃은 없음
- <img width="1211" alt="스크린샷 2022-06-17 오전 9 39 08" src="https://user-images.githubusercontent.com/99126860/174200122-eb4f5402-5b80-47e9-8230-73127545c439.png">

- Sider -전체와 각 지역으로 넘어가는 버튼과 충전기 전체의 정보를 가지고 있음 
- <img width="209" alt="스크린샷 2022-06-17 오전 9 38 59" src="https://user-images.githubusercontent.com/99126860/174200129-fe482fd1-bcec-4d37-9bd1-e13049c1ccd0.png">


## components
- components 폴더의 내용은 작업내용 각각의 작은 단위
- 재사용 components 들이 있음
- EChartsPie.js 파일은 지역 충전기정보의 그래프를 ant => Echarts   변경 작업중 

## error
- setInterval 메모리 누수 메모리 누수에 대한 이해도가 부족해 해결을 못함
- aws 배포시에 npm run build 가 안됨!<img width="568" alt="스크린샷 2022-06-17 오전 9 22 20" src="https://user-images.githubusercontent.com/99126860/174199695-fe7e3c21-7d6f-4fe4-acc3-4e1bb80b2861.png">
- 그래프의 여러가지 데이터를 map으로 해서 코드를 짧게 하고 싶었으나 여러 방법을 검색해보고 시도해봤으나 
