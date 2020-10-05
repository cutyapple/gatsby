---
title: <개발 - JS> empty undefined null
date: "2020-10-05T19:13"
description: "JavaScript's empty undefined null"
---

### Cutyapple's JS 공부

- 요즘 다시금 JS 공부를 하고 있다...
- 스스로 정리하기 전까지 자신의 지식이 아니라는 말에 감명받아 정리하고 있다. (잘 할거지...?)

## empty, undefined, null

undefined와 null은 js의 데이터타입이다. 둘 다 비어있음을 나타내는데, 둘은 무슨 차이일까? 그리고 empty는 무엇일까?

### empty

empty는 배열에서 볼 수 있다.

```javascript
let arr = [] // 비어있는 배열
arr[0] = 0
arr[1] = 1 // 배열에 index로 접근하여 동적으로 값을 지정할 수 있다.

arr[3] = 3 // 이렇게 되면 arr[2]에는 무슨 값이 들어갈까?

console.log(arr) // [ 0, 1, <1 empty item>, 3 ]
console.log(arr[2]) // undefined;
```

**실제로 있는 것이 아니라, 비어있다는 것을 알려주기 위해 empty로 표현하는 것이다.**

실제로는 `undefined`로 저장되어 있다.

그러나 이렇게 비어있는 배열 칸이 생긴다면, 배열 순회 함수에서 **empty 부분을 인식하지 않고 무시한다.**

```javascript
arr.forEach(function (element, index) {
  console.log(element, index)
})
// 0 0
// 1 1
// 3 3
```

`length` 프로퍼티에서는 인식되어 그대로 나온다.

```javascript
arr.forEach(function (element, index) {
  console.log(element, index)
})
// 4
```

### undefined

`undefined`는 **정의되어 있지 않음**을 나타내는 데이터 타입이다.

변수에 값을 할당하기 전, JavaScript 내부적으로 초기화 해주는 값이다.

```javascript
let letValue
console.log(letValue) // undefined

console.log(hoistingValue) //undefined
var hoistingValue = 3
```

또한, 객체에 존재하지 않는 프로퍼티에 접근하여도 `undefined`를 표시된다.

```javascript
const person = {
  name: "cutyapple",
}

console.log(person.age) // undefined
```

그리고 return문이 없는 함수를 호출할 경우에도 `undefined`를 반환한다.

```javascript
function func() {
  console.log("func")
}
console.log(func()) // func
// undefined
```

### null

`null`은 **비어 있음**을 나타내는 데이터 타입이다.

`undefined`와는 다르게 명시적으로 비어있음을 나타낸다.

사용자가 `undefined`를 직접 줄 경우, 해석에 어려움이 생길 수 있다.
