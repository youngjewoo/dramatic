import moment from 'moment';
import ResourceModel from '../resource/ResourceModel';

const resourceStub: ResourceModel[] = [
  new ResourceModel(
    'https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ko',
    'Critical Rendering Path',
    'og/google.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://developers.google.com/web/updates/2018/09/inside-browser-part3?hl=ko',
    '모던 브라우저 렌더링 과정',
    'og/google.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://ivorycode.tistory.com/entry/브라우저-렌더링-과정',
    '브라우저 렌더링 과정',
    'og/ivory.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://blog.buildit.kr/post/3',
    '크롬 개발자 도구 사용법',
    'og/buildit.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://subicura.com/2018/02/14/javascript-debugging.html',
    'JavaScript 디버깅',
    'og/subicura.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://ko.wikipedia.org/wiki/더닝-크루거_효과',
    '더닝 크루거 효과',
    'og/wiki.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://www.huskyhoochu.com/how-browser-works/',
    '브라우저 동작 원리',
    'og/h.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://d2.naver.com/helloworld/59361',
    '브라우저는 어떻게 동작하는가',
    'og/d2.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://sculove.github.io/slides/improveBrowserRendering/#/',
    'FE 개발자가 수행하는 성능 개선 작업',
    'og/improve_performance.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations?hl=ko',
    '스타일 계산의 범위와 복잡성 줄이기',
    'og/google.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://stackoverflow.com/questions/25724126/chrome-devtools-timeline-update-layer-tree-event',
    'Update Layer Tree in timeline',
    'og/stack_overflow_icon.svg',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://groups.google.com/a/chromium.org/g/blink-dev/c/j7YQtj0Yyxs',
    'Update Layer Trees',
    'og/group.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=ko',
    '객체 모델 생성',
    'og/google.png',
    '',
    moment().format(),
  ),
  new ResourceModel(
    'https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/paint/README.md#Current-compositing-algorithm-CompositeBeforePaint',
    'Composite Before/After Paint',
    'og/chromium.png',
    '',
    moment().format(),
  ),
];

export default resourceStub;
