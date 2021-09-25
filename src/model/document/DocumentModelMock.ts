import BreakLineModel from './BreakLineModel';
import DocumentModel from './DocumentModel';
import ImageModel from './ImageModel';
import LinkModel from './LinkModel';
import ParagraphModel from './ParagraphModel';
import RunModel from './RunModel';

const documentModel = new DocumentModel();
const contentsAry = [
  new ParagraphModel([
    new RunModel({
      text: '이미 브라우저의 렌더링 과정 (CRP : Critical Rendering Path)에 관한 글들은 많습니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '가장 이해가 잘 됐던 글은 아무래도 구글에서 직접올린 이 글이 아닐까 생각되네요.',
    }),
  ]),
  new BreakLineModel(),
  new LinkModel(
    'Google CRP 링크',
    'https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ko',
  ),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '그럼에도 다시 한 번 포스팅하는 이유는',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '1. 첫 번째로 그만큼 Front-end 개발에 있어 필수적으로 이해해야하는 요소이며',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '2. 저만의 방식대로 기억하기 위해서입니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '첫 번째, 브라우저의 렌더링 모식도',
      fontSize: '20px',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/1.png', height: '206px', width: '516px' }),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: 'Google에 존재하는 수많은 렌더링 과정 모식도 중 ',
    }),
    new RunModel({
      text: '제가 가장 좋아하는',
      isBold: true,
    }),
    new RunModel({
      text: ' 이미지입니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '왜냐하면, 한 장의 그림에 정확한 렌더링 순서 및 색깔 등 많은 정보를 담고 있기 때문이죠.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '다른 많은 그림에도 브라우저의 렌더링 순서는 잘 표현돼있습니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '그럼에도 특히 이 그림을 선택한 이유는 바로 ',
    }),
    new RunModel({
      text: '색깔',
      isBold: true,
    }),
    new RunModel({
      text: ' 때문입니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '"색이 뭐가 중요하냐구요?"',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '바로 저 색들은 "Chrome DevTools"에서 우리가 볼 수 있는 색깔과 동일하기 때문이죠',
    }),
  ]),
  new ImageModel({ url: 'contents/2.png', height: '140px', width: '516px' }),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '노란색',
      isBold: true,
      fontColor: 'GoldenRod',
    }),
    new RunModel({
      text: ' - JavaScript',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '파란색',
      isBold: true,
      fontColor: 'DodgerBlue',
    }),
    new RunModel({
      text: ' - HTML Parsing',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '보라색',
      isBold: true,
      fontColor: 'Indigo',
    }),
    new RunModel({
      text: ' - Rendering',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '초록색',
      isBold: true,
      fontColor: 'SeaGreen',
    }),
    new RunModel({
      text: ' - Painting',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '이런식으로 개발자 도구를 통해 성능을 profiling 하려고할 때 색깔이 엄청난 시각적 힌트가 되는 것이죠!',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '아마 저 그림을 만든 사람은,',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '한 장의 이미지를 보여줄 때도 어떻게 하면 많은 정보를 전달할 수 있을까 고민하는 좋은 FE 개발자가 아니었을까... ',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '라고 생각하고 있습니다.',
    }),
  ]),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '두 번째, 각 단계에서 하는 일',
      fontSize: '20px',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/3.png', height: '206px', width: '516px' }),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '1. DOM 트리 생성 : HTML 파일을 파싱하여, 트리형태의 모델로 만듭니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '2. CSSOM 트리 생성: CSS 파일을 파싱하여 마찬가디로 CSS 파일을 만듭니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '3. JavaScript : HTML에 삽입된 JavaScript를 실행합니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '4. Render 트리 생성 : DOM과 CSS를 참고하여 화면에 보여야하는 노드만을 트리로 구성합니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '5. Layout : 뷰 포트 내에 보이는 노드들의 위치, 크기등을 계산합니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '6. Paint : Layout이 끝난 render-tree를 화면에 그릴 수 있는 2차원 형태로 만듭니다.',
    }),
  ]),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '자세히 들어가면 각 단계마다 굉장히 깊은 일들이 일어나지만,',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '그것들은 추후 포스팅에서 다루도록 하겠습니다.',
    }),
  ]),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '세 번째, 크롬 개발자 도구와 CRP 모식도의 차이점',
      fontSize: '20px',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '자 이렇게 처음 CRP를 정독하고',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '"후~ 이제 성능 분석 좀 해볼까~~?"',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '라는 자신만만한 생각으로 개발자 도구를 켰다가 보기좋게 난관에 봉착했습니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '제가 알고 있던 명칭은 이게 아닌데요..?',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ImageModel({ url: 'contents/4.png', height: '308px', width: '384px' }),
  new ParagraphModel([
    new RunModel({
      text: '그 순간 더닝 크루거 곡선이 떠오르며 저의 무식한 자신감이 부끄러워지는 순간이었습니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '그래서 실제 CRP에서 흔히 다루는 명칭이 개발자 도구의 어떤 부분과 매칭 되는지 알아보겠습니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '먼저 흔히 CRP를 설명하기 위해 사용되는 그림들을 보시져',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '1. 그림 1',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/5.png', height: '195px', width: '488px' }),
  new ParagraphModel([
    new RunModel({
      text: '2. 그림 2',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/6.png', height: '78px', width: '516px' }),
  new ParagraphModel([
    new RunModel({
      text: '3. 그림 3',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/7.png', height: '238px', width: '516px' }),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '세 그림이 달라보이는 이유는 Render와 Paint 부분을 각자 자신만의 방법으로 설명하기 때문입니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '그래서인지 정확히 Render와 Paint 에서 어떤일이 일어나는지 확 정리가 되질 않았어요 ㅠ',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '그래서 저는 크롬 개발자 도구를 기준으로 CRP의 과정을 한 번 정리해보기로 했습니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '크롬 개발자 도구 타임라인에서 표시되는 CRP',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ImageModel({ url: 'contents/8.png', height: '294px', width: '516px' }),
  new ParagraphModel([
    new RunModel({
      text: '개발자 도구에서의 CRP 순서도',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/9.png', height: '98px', width: '516px' }),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '정리해보자면 위와 같은 순서가 됩니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '대부분 동일한 프로세스이지만',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '- Recaculate Style',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '- Update Layer Tree',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '- Composite Layers',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '요 세 가지 부분이 눈에 띄는군요.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '먼저 각 부분에서 수행되는 일을 말씀드리겠습니다.',
    }),
  ]),
  new BreakLineModel(),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '1. Recalculate Style',
      fontSize: '17px',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: 'CSS 파싱, CSSOM 트리 생성 그리고 계산된 스타일의 재귀적 계산',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: "DOM 파싱과 달리, 타임라인에 'Parse CSS' 라는 항목이 별도로 표시되지 않습니다.",
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '대신 파싱 및 CSSOM 트리 생성과 계산된 스타일의 재귀적 계산이 묶여서 개발자도구에 Recalculate Style 이라는 이름으로 보이는 것이죠!',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '재귀적 계산이라는 말이 잘 안 와닿으실 수 있는데 그냥 재귀적으로 트리를 순회한다는 이야기로 받아들이시면 편합니다.',
    }),
  ]),
  new ImageModel({ url: 'contents/12.png', height: '268px', width: '638px' }),
  new ParagraphModel([
    new RunModel({
      text: "'Cascade down' 이라고 표현하고 있으니 위에서 아래로 내려가며 CSS 스타일을 계산한다.. 정도로 생각하시면 되겠습니다.",
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '2. Update Layer Tree',
      fontSize: '17px',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '레이아웃 트리를 순회하며 어떤 요소들이 어떤 layer에 배치됐는지 보고 layer tree 구성',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '과거의 브라우저들은 뷰포트 내 영역만 레스터라이징하고 만약 화면이 움직이면 그 부족한 부분을 채우는 방식으로 동작했습니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '하지만 모던 브라우저에서는 layer 개념이 등장했죠.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '한 페이지의 부분들을 layer로 나누고, layer를 각각 레스터라이징한 후 컴포지터 쓰레드에서 합성하는 방식으로 동작합니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '레이어들을 미리 그려놓고 뷰포트에 위치에 맞는 이미지를 합성하는 것이죠',
    }),
  ]),
  new ImageModel({ url: 'contents/10.png', height: '245px', width: '516px' }),
  new ParagraphModel([
    new RunModel({
      text: '각각의 layer들을 미리 레스터라이징 해야하기 때문에, 어떤 레이어에 어떤 노드가 배치돼야하는지 알아야겠죠?',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '그 정보가 바로 Layer Tree 입니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '그렇기 때문에 여기서는 노드가 어떤 레이어에 속하는지 보고 layer tree를 만드는 과정이 이루어집니다!',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '3. Composition',
      fontSize: '17px',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '레스터라이징된 layer의 타일을 모아서 하나의 프레임으로 만듬',
      isBold: true,
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: 'Layer를 래스터라이징 하기 위해 여러 개의 레스터 쓰레드를 사용합니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '이 때 하나의 layer를 여러 개의 타일로 쪼개어 GPU를 통해 레스터라이징을 하지요.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '그리고 작업이 끝나면 그 타일들을 모아 ',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '우리가 컴포지터 프레임이라고 부르는 ',
    }),
    new RunModel({
      text: '한 장의 비트맵으로 만드는 역할!',
      isBold: true,
    }),
  ]),
  new ImageModel({ url: 'contents/11.png', height: '302px', width: '582px' }),
  new ParagraphModel([
    new RunModel({
      text: '그것이 컴포지션 단계에서 이뤄지는 일입니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '여기까지 개발자도구에서 보여지는 순서에 따라 브라우저의 렌더링 과정을 정리해봤습니다.',
    }),
  ]),
  new BreakLineModel(),
  new ParagraphModel([
    new RunModel({
      text: '처음에는 리액트 컴포넌트가 실제 DOM에 attach 되는 시점이 궁금해서 개발자 도구를 켰습니다.',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '하지만 개발자 도구를 이해하기 위해서는 위에서 설명했던 CRP, 그리고 모던 브라우저의 렌더링 과정까지 이해해야 제대로 된 분석이 가능하더군요..',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: 'Recalculate Style, Update Layer Tree, Composition 세 단계와 모던 브라우저의 동작 방식을 잘 기억하면서, 페이지 성능 최적화에 힘 쓰는 개발자가 돼야겠습니다!',
    }),
  ]),
  new ParagraphModel([
    new RunModel({
      text: '위 포스팅 내용은 하단 링크의 글을 많이 참조했습니다.',
    }),
  ]),
];

contentsAry.forEach((model) => documentModel.addModel(model));

export default documentModel;
