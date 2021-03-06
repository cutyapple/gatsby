---
title: <개발 - PICK> PICK 개발일지 (5)
date: "2020-09-04T01:32"
description: "사전결석신고 기능 개발 중"
---

### Cutyapple's PICK 개발일지 (5)

- Please In Class Kids 프로젝트의 프론트 개발자로써 적는 개발 일지.
- 웹린이의 **첫 프젝!** 인만큼... 여러 에러들이 있을테니 적어서 성장(?)하자!

사실 오늘은 많이 하질 못했다... 반성하자. 잠만 자다가 하루가 지나갔다. 덕분에 조금은 밤을 버틸 수 있을 것 같다.

일단은 달력 컴포넌트의 On/Off 기능을 구현한 상태다. **그러나 하나 문제가 있다.**

지금 `PreReportCalander` 라는 컴포넌트와 `PreReportDate`라는 컴포넌트가 있다. 너무 기니 각각 **달력**와 **일정**으로 부르겠다.

일정 컴포넌트 내부에는 **월, 일, 교시**값을 저장하는 컴포넌트가 2개가 있다. 시작 일정과 끝 일정이라 하겠다.

시작과 끝 일정 컴포넌트는 달력 컴포넌트를 호출하여 월, 일 값을 받게 되어있다.

문제는 여기서 발생한다.

내가 개발을 할 때에 일정의 틀을 잡고, 달력 컴포넌트를 다 만들고 이제 둘을 합치는 작업을 하고 있는데. 달력 컴포넌트에서 사용하는 state들이 시작과 끝 일정 컴포넌트에서 state와 이름이 유사한 것이다. 설계 미스다. 일단 이에 대한 원인은 크게 두 가지가 있는 것 같다.

### 1. 깨끗하지 못한 변수명

그렇다. 클린코드 적이지 못한 변수명이다. 솔직히 지금 내가 쓰고 있던 변수명들은 모두 클린하지 못하다. 협업을 하고 있는 개발자가(협업이 아니더라도) 클린하지 못한 코드를 짜는 것은 굉장히 나쁜 행위이다.

### 2. 구조적 설계의 경험 부족

조금은 변명같으나, 경험이 부족했던 것 같다. 한 기능에 대해서 각 컴포넌트들을 미리 구상하고, 데이터의 흐름이나 상속 등을 미리 구조적으로 설계를 충분히 한 후에 개발을 시작했어야 했다. 예전에도 이를 간과하여 프로젝트 자체를 다시 시작한 경우가 있었다. 조금 더 경각심을 가질 필요가 있다.

문제의 원인을 알았다면 이제 이를 의식하고, 다시 반복하지 않게 하면 되는 것이다. 어제의 실수를 몇번이고 되풀이할 수는 없으니까.

어쨋든... CutyApple 화이팅~ :D

## 할 일

### 할당 작업

- Main Page
  - `/main`
  - 로그인 후 보이는 첫 페이지.
- Attendance Page.
  - `/main/attendance`
  - 출석 기능을 사용하는 페이지.

### 지금까지 한 진전도 (UI)

#### Main Page

- Header - Complete
- Main
  - Main/출석하기 - Complete
  - **Main/사전결석신고 - 55%**
- Footer - Complete

#### Attendance Page

- Header - Complete
- Main - Complete
- Footer - Complete

### 어제 계획한 일

1. (완료) **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 달력 On/Off
2. (진행도 : 0%) **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **교시 선택** 기능 구현

### 내일 할 일

1. **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 달력 컴포넌트 연동
2. **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **교시 선택** 기능 구현
3. **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **추가하기** 기능 구현

내일은 금요일이니 시간이 많을 것이라 생각하여 조금 많은 양을 잡았다. 오늘 잠을 많이 잔 만큼 내일은 해낼거라 믿으며... CutyApple 화이팅~
