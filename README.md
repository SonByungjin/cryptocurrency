# Coinone Website Clone Project
___
# 개요
- **기간** : 2020.10.02 ~ 2020.10.16
- **인원** : 총 5명
  - 백엔드 : 최지선, 김수정
  - 프론트엔드 : 최예원, 홍예찬, 손병진
  
- **코인원 소개 및 주요 기능**

  암호 화폐 거래 사이트로써 대표적인 예시인 비트코인을 포함한 다양한 암호화폐를 다루며, 주식과 같이 투자할 수 있도록 만든 플랫폼이다.<br>
  &nbsp;&nbsp;주요 기능으로는 일단 메인 페이지에서는 암호화폐의 시세에 따라 그래프를 보여주고 있다. 상한가, 하한가에 따라 색깔을 다르게 했으며 등락률, 거래량과 같은 기준에 따라 종목이 정렬되는 기능이 있다. 거래소 페이지에서는 암호 화폐가 주식 그래프로 보여주고 있다. 종목별로 확인이 가능하며 보유 자산에 따라 매수/매도를 할 수 있다. 그리고, 실시간으로 암호화폐의 시세에 따라 체결내역 및 매수/매도 현황 정보가 갱신된다. 사용자에 따른 암호화폐 체결내역은 수익현황 페이지에서 확인할 수도 있다.

- **팀원별 역할 분배 및 활용 skill**
  - 백엔드 : python(django)
    - **최지선**<br>
      회원가입 : 회원가입시 유저의 아이디와 비밀번호가 확인되었을때 인증메일을 전송하는 절차를 넣어 사용자를 확인하는 기능을 구현했다      
    
    - **김수정**<br>
      로그인 : 가입된 유저 정보뿐만 아니라 카카오톡 계정 소셜로그인 기능을 구현하여 바로 로그인할 수 있게끔 만들었다.
      
    - ***공통***<br>
      _그래프의 과거 데이터_<br>
      : 크롤링이 불가하여 직접 그래프 데이터를 생성하였는데, 한 시점당 시가, 종가, 저가, 고가 수치가 있게끔 생성하였다. 또한 이전 시전의 종가가 다음 시점의 시가가 될 수 있게끔 데이터를 만들어 주식 그래프가 만들어질 수 있게끔 데이터를 마련하였다.
      
      _실시간 가상 거래 데이터 생성_<br>
      : 실시간으로 거래가 되며 해당 데이터가 웹에서 반영되기 때문에 백엔드에서 가상 유저를 약 1000여명 만들어 거래가 일어나게끔 구현하였다.
      그 수치 또한 현실성이 반영되게끔 범위를 조정해가며 데이터를 생성하였다.
    
  - 프론트엔드 : javascript(React)
    - **최예원**<br>
      거래소 페이지를 맡았으며, Highcharts 라이브러리를 활용해 그래프를 구현했고, 데이터를 실시간을 받아왔다.<br>
      그래프 중에서 stock charts 활용하였으며, 시세뿐만 아니라 거래량도 확인할 수 있고 등략률에 따라 색깔이 다르게끔 보여질 수 있도록 해당 속성을 탐색하고 수정하였다.
      받아온 데이터를 그래프뿐만 아니라, 채결내역과 매수/매도 현황 정보에도 연동하여 보여질 수 있도록 그리고 반영되는 시점까지 동일하게 만들어주었다.
      추가로 암호화폐에 대한 보유 자산에 따라 매수/매도 기능까지 구현하여 하단에서 거래 현황을 확인할 수 있는 레이아웃까지 만들었다. 
      
    - **홍예찬**<br>
      메인 페이지를 담당했으며, Highcharts 라이브러리를 활용해서 그래프를 만들고, 전체적인 레이아웃까지 맡았다.<br>
      코인원 사이트에서 처음에 보여지는 메인 페이지의 레이아웃을 그대로 구현했으며, 세부적인 호버 및 클릭 이벤트 기능까지 넣었다.
      라이브러리를 활용해 선 그래프를 만들었으며, 깔끔한 코인원의 그래프 디자인을 구현하기 위하여 xy축 및 등락률에 따라 색깔을 다르게 넣었다. 
      그리고 일부러 네이게이터를 넣어 데이터에 따라 전반적인 추세를 확인할 수 있게끔 하였다. 마지막으로 거래량과 등락률에따라 암호화폐 종목이 정렬될 수 있는 기능까지 추가하였다.
      
    - **손병진**<br>
      네비게이션바, 푸터 등 공통 컴포넌트를 담당하였으며, 로그인과 회원가입, 수익현황 페이지까지 맡았다.<br>
      소셜로그인시 카카오톡과 연결될 수 있도록 통신을 구현하였고, 카카오톡 계정에서 받은 토큰을 백엔드에게 전달하여 유저 토큰을 새로 생성하게끔 기능을 구현하였다.
      클릭시 다른 페이지로 넘어갈 수 있도록 링크를 연결하였고, 유저에 따라 거래내역을 확인할 수 있게끔 수익현황 레이아웃을 만들었다.
___
# 결과물
## 소셜로그인
![](https://images.velog.io/images/sgyos000/post/bded169e-8ea5-4f3a-b9f1-e695b13469d3/%EC%86%8C%EC%85%9C%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif)

## 메인
![](https://images.velog.io/images/sgyos000/post/27ba37cb-46eb-4910-8d0a-f91537e9f766/%EB%A9%94%EC%9D%B8.gif)

## 거래소
### Top
![](https://images.velog.io/images/sgyos000/post/7cf7d416-0091-444d-a466-56e65fd94c7a/%EA%B1%B0%EB%9E%98%EC%86%8C(1).gif)

### Bottom
![](https://images.velog.io/images/sgyos000/post/82c18ec8-6add-488f-9c78-73322b833df7/%EA%B1%B0%EB%9E%98%EC%86%8C(2).gif)

## 수익현황
![](https://images.velog.io/images/sgyos000/post/6162fe8a-3d1d-49a7-bcd6-9f723117efd5/%EC%88%98%EC%9D%B5%ED%98%84%ED%99%A9.gif)
___
모두 정말 수고 많으셨고, 함께 해주어 너무나 감사하고, 언제나 항상 응원하고 축복하겠습니다
