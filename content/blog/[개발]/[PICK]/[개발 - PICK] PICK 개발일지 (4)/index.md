---
title: <개발 - PICK> PICK 개발일지 (4)
date: "2020-09-02T20:06"
description: "PICK Client 개발일지 (4)"
---

### Cutyapple's PICK 개발일지 (4)

- Please In Class Kids 프로젝트의 프론트 개발자로써 적는 개발 일지.
- 웹린이의 **첫 프젝!** 인만큼... 여러 에러들이 있을테니 적어서 성장(?)하자!

현재 사전결석신고의 날짜 선택의 달력을 만들고 있다. 기존에 다른 팀원이 만들어 둔 API로 잘 쓰고 있다.

확실히 체계화 적으로 잘 정리하는 게 좋다고 느낀다...

같은 컴포넌트가 두 번 호출되면서 서로 다른 기능을 수행한다는 게 참... 짜면서도 이게 맞나 싶다. 조금 더 고민해야겠다.

달력 기능 자체는 완성했다. 기존 API가 현재 시간을 기준으로 그 달의 데이터만 줬지만, API를 수정하여 달 이동을 추가시켰다. 남의 코드를 분석하는 것은 힘들긴 하지만, 새로운 방법을 배우는 느낌이라 설렌다.

이제 달력을 켜고 끄는 기능을 구현하고, 달력 후에 교시를 선택하는 기능을 하면 **사전결석신고 - Date** 파트는 끝난다. 내일은 이 기능들을 해야겠다.

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
  - **Main/사전결석신고 - 45%**
- Footer - Complete

#### Attendance Page

- Header - Complete
- Main - Complete
- Footer - Complete

### 내일 할 일

1. **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 달력 On/Off
2. **Main Page**의 **사전 결석 신고 기능** 중 **Date** 파트의 **교시 선택** 기능 구현
