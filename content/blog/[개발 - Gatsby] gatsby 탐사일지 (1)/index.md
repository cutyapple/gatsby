---
title: <개발 - Gatsby> gatsby 탐사일지 (1)
date: "2020-08-24T21:19"
description: "gatsby 탐사일지 (1)"
---

### Cutyapple's gatsby 탐사일지 (1)

- gatsby를 처음 쓰므로... gatsby의 요소들을 알아내면 좀 적어야겠지! 그러므로 쓰는 탐사일지!
- 일단 gatsby를 오늘 처음 쓰기 시작했다. (그래서 착각하는 것일 수도 있다. 수정 바람)

오늘은 gatsby의 **폰트**를 바꿔보았다.
원래 한글 폰트가 아주아주 이상하더라구... 그래서 구글링을 통해 바꿔보았는데! `src/utils/typgraphy.js` 폴더에서 바꿀 수 있었다.

gatsby에서는 [**gatsby-plugin-typography**](https://www.gatsbyjs.com/plugins/gatsby-plugin-typography/)라는 플러그인을 지원한다. (`gatsby-config.js` 파일에 있더라.) **Typography.js**를 사용하기 쉽게 해주는 플러그인이다.

일단 없는 경우를 대비해서! 설치를 알아보자.

#### 설치

`gatsby-config.js` 파일에 plugins에 추가해줘야 한다.

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

이런식으로 말이지.

[**gatsby-plugin-typography**](https://www.gatsbyjs.com/plugins/gatsby-plugin-typography/)라는 곳에서 좀 자세히 나와있어서(물론 영어로;;) 조금 찾아보니 **pathToConfigModule**이라는 옵션은 String 값을 받는데, **타이포그래피 구성을 내보낼 파일의 경로**를 받는다고 한다.

옵션은 하나 더 있는데, 바로 **omitGoogleFont**라는 옵션이다.

타이포그래피에는 **구글 폰트 CDN**에 필요한 폰트를 요청하는 헬퍼가 있다. 그래서 글꼴을 JS에 삽입하거나 원하는 CDN을 사용할 수 있다. 만일 저 옵션을 **true**로 설정하면 이 헬퍼가 작동하지 않아서 직접 글꼴을 추가해야 한다.

#### 참고) [CDN이 무엇인지 알고싶다면?](/[개발%20잡지식]%20CDN이란/)

```js
import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Nanum Gothic Coding",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Nanum Gothic Coding", "sans-serif"],
  bodyFontFamily: ["Nanum Gothic Coding", "serif"],
})
```

googleFonts 속성의 객체의 name 속성에 구글 폰트 CDN에 있는 폰트 이름을 입력하면 사용이 가능하다!
