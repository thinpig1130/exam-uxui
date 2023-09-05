## git-pages html 배포를 위한 환경 
[참고사이트](https://github.com/lucpotage/nuxt-github-pages)

#### 라이브러리 설치
```bash
npm install gh-pages --save-dev
```
#### `nuxt.config.ts` 설정
```typescript 
export default defineNuxtConfig({
  app: {
    baseURL: "/배포디렉토리명/",
    buildAssetsDir: 'assets'
  }
})
```
#### `package.json` 설정
```json
{

  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

#### html 생성
```bash
npm run generate
npm run deploy
```

## scss 변수 및 mixin 글로벌 적용을 위한 라이브러리 
```bash
npm install --save-dev @nuxtjs/style-resources

npm uninstall @nuxtjs/style-resources
```

## 설문지 디자인 참고 자료
###### [UI 사용법 (설문만들기)](https://guide.feedback.io/b4393375-60c3-4176-a7d3-ed4615640638)
###### [통계 UI](https://openanalytics.opensurvey.co.kr/surveys/crosstab/128079?shareKey=CfLNGqvNek73)
