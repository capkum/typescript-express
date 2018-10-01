Typescript + express
======================

## 1.Used package
package.json 참조

## 2. description
* express 웹프레임 워크를 typescript로 구현 <br>
* 로거는 log level을 사용할수 있는 winston 사용 <br>
* morgan은  log level을 사용할수 없어 제외 <br>
* view engine은 jinja2와 비슷하게 작동하는 nunjucks 사용 <br>
* 앱과 라우터만 추가하면 바로 사용 할수 있게 구성 <br>
* routes.ts 객체화한 앱들의 route을 호출 <br>
* appRoute/ app의 route객체들이 있는 곳 <br>
* apps/ 실질적인 app들의 로직 처리 객체들이 있는 곳 <br>
* gulp를 이용한 typescript compile <br>
* node package 관리자로 yarn 사용 <br>

## How to use
<pre>
    <code>
    $ yarn install
    </code>
</pre>
<pre>
    <code>
    $ gulp cmp && yarn dev
    </code>
</pre>

## In conclusion
개인적으로 사용하려는 걸 혹시 필요한 사람이 있을 듯 하여 깃에 올림 <br>
sign앱은 테스트로 작성한것 <br>

## License
MIT