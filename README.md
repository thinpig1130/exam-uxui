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
