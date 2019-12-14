# Test TypeORM for typescript

1. 개발시에는 `npm run dev`를 이용
   - tsnd options
   ```
   --respawn : 예상치 못한 에러로 스크립트가 종료되어도 tsnd가 종료되지 않음
   --transpileOnly: 성능 향상을 위한 것이라고 해서 썼는데 정확히 모름
   ```

2. `syncronize: true`를 사용하지 않고 수동으로 migration 하도록 설정

3. 처음 clone을 받으면 `npm i`, `npm run migration`을 실행하여 스키마 동기화
   - 이후에는 `npm run migration`으로 스키마 동기화

4. 스키마 변경이 있으면 `npm run migration:gen -- -n <name>`으로 migration script 생성

5. 앱이 배포될때는 transpiled js가 배포 되므로 테스트를 위해 `npm start`로 테스트 함
   - 개발, 운영시 같은 config를 사용하기 위해 ormconfig를 js로 작성
   - 운영 배포시 build 후에 최종 파일만 배포하므로 스크립트 수정 필요
   - typeorm의 DB credentials는 .env등으로 소스에 포함되지 않도록 관리 필요
   - 앱 시작전에 migration을 진행해야 함. 이때 syncronize: true로 자동으로 동기화 하는 방법과 스크립트 실행되도록 하는 것 중 어느것이 더 좋은 방법인지 확인하지 않음
