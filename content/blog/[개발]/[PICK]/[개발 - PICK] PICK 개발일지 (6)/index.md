---
title: <개발 - PICK> PICK 개발일지 (6)
date: "2020-09-05T00:18"
description: "사전결석신고 기능 개발 중"
---

### Cutyapple's PICK 개발일지 (6)

- Please In Class Kids 프로젝트의 프론트 개발자로써 적는 개발 일지.
- 웹린이의 **첫 프젝!** 인만큼... 여러 에러들이 있을테니 적어서 성장(?)하자!

일단 오늘도 퍼질라 잤다..! 그래도 괜찮다. 내일은 토요일이니 밤을 불사를 수 있다!! 쿠헬헬

달력 컴포넌트 연동 과정에서 한 번 더 설계 미스를 포착했다.

`PreReport` 컴포넌트에서 **결석 상태, 이름, 시작 월일교시, 종료 월일교시**를 관리해야 한다. 그런데... 그 하위 컴포넌트에 모든 state와 function들을 두고... 작업을 해서... 옮기느랴 시간이 걸렸다. 그것 뿐 아니라 하위 컴포넌트로 넘겨주는 props의 코드 수만 약 20줄... 좋은 코드는 아닌 것 같다... 오늘의 경험으로 다음 프젝은 더 좋게 만들 수 있을 거라는 확신을 가지며. CutyApple 화이팅...!

계획한 일 중 **교시 선택** 기능 구현 완료가 있었다. 그러나 거의 다 개발할 무렵, 문제를 하나 포착했다.

바로 **예외처리**

만일 9월 15일부터 8월 16일까지 결석을 한다고 입력하면 어떻게 오류를 내고, 수정을 시켜줘야 하는가? 디자이너가 주무시기 때문에... 아 근데 이거 그냥 내가 처리할까 생각중이다. 어짜피 나중에 문제가 되면 수정하면 되기도 하고... 그쳐? 그럼 이거 적는대로 가서 이거 마저 개발해야긋다.

```
1. prev 선택 시
9월 15일 | 9월 16일 => O
9월 15일 | 9월 15일 => O
9월 15일 | 9월 14일 => 9월 14일 | 9월 14일
9월 15일 | 8월 16일 => 8월 15일 | 8월 16일
9월 15일 | 8월 15일 => 8월 15일 | 8월 15일
9월 15일 | 8월 14일 => 8월 14일 | 8월 14일

2. next 선택 시
9월 15일 | 9월 16일 => O
9월 15일 | 9월 15일 => O
9월 15일 | 9월 14일 => 9월 15일 | 9월 15일
9월 15일 | 8월 16일 => 8월 15일 | 9월 16일
9월 15일 | 8월 15일 => 8월 15일 | 9월 15일
9월 15일 | 8월 14일 => 8월 14일 | 9월 15일

뭐 이렇게 Test Case들을 만들어 보다가, 나 혼자 하면 안될 것 같아서 일단 12시 지났길래 gatsby 작성하러 왔다. 다시 하러 가야지 후후
```

이 예외처리는 프로젝트를 같이 진행하고 있는 팀원과 협의하여 결정했다.

바로, **값이 오류가 있을 경우, 그냥 똑같은 값으로 변경하기!**

```
1. prev 선택 시
9월 15일 | 9월 16일 => O
9월 15일 | 9월 15일 => O
9월 15일 | 9월 14일 => 9월 14일 | 9월 14일
9월 15일 | 8월 16일 => 8월 16일 | 8월 16일
9월 15일 | 8월 15일 => 8월 15일 | 8월 15일
9월 15일 | 8월 14일 => 8월 14일 | 8월 14일

2. next 선택 시
9월 15일 | 9월 16일 => O
9월 15일 | 9월 15일 => O
9월 15일 | 9월 14일 => 9월 15일 | 9월 15일
9월 15일 | 8월 16일 => 9월 15일 | 9월 15일
9월 15일 | 8월 15일 => 9월 15일 | 9월 15일
9월 15일 | 8월 14일 => 9월 15일 | 9월 15일
```

**Date** 파트의 추가 기능은 이름을 부분을 개발한 후에 할 수 있을 것 같다.

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
  - **Main/사전결석신고 - 65%**
- Footer - Complete

#### Attendance Page

- Header - Complete
- Main - Complete
- Footer - Complete

### 어제 계획한 일

1. (완료) **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 달력 컴포넌트 연동
2. (완료) **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **교시 선택** 기능 구현
3. (진행도 : 30%) **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **추가하기** 기능 구현

### 내일 할 일

1. **Main Page**의 **사전 결석 신고 기능** 중 **Name** 파트의 **이름 자동완성** 기능 구현
2. **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **추가하기** 기능 구현
