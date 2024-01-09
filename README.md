# 자바스크립트 시작 (23/12/18~)
## 프로그래밍 언어 유형
* 절차를 순서대로 작성해 나가는 절차적 언어
* 데이터와 절차를 묶어 객체 단위로 관리하는 객체 지향 언어
* 프로그램 함수를 조합하여 구현해 나가는 함수형 언어
* 데이터 사이의 관계와 논리를 설명해가는 논리형 언어
## 흐름
* 목표 설정하기
* 흐름도 작성하기
* 단계에 맞춰 코드 작성하기
## 객체, 속성, 메소드, 이벤트
### Object 객체 
* 사용자가 컨트롤할 수 있는 객체대상 / 버튼, 링크, 텍스트 박스 등
* 자바스크립트에서 동적으로 제어하기 위한 모든 대상 (웬만하면 변수로 사용)
### Property 속성 
* 객체가 가지는 고유한 속성 또는 추가 속성
### Event 이벤트
* 인터넷 브라우저에서 발생할 수 있는 사건 / 사이트 접속, 클릭, 드래그, 더블클릭, 키보드 입력 등/ 사용자의 모든 행위, 사용자가 웹에서 하는 모든 행위
### Method 메소드
* 객체의 실행 / 확인, 삭제, 취소, 이동, 애니메이션 등

----


# 23/12/20
## 자바스크립트 주의사항
* CSS와 다르게 파일에 없는 속성 작성하면 오류가 생김!! 주의

## 외부스크립트와 내부스크립트

### 내부스크립트
`<script>내부스크립트</script>`
### 외부스크립트
`<script src="#" defer></script>`
* 가운데는 작성금지
* defer -> 페이지 우선 로드 후 스크립트 읽는 속성 / 빨라짐!
* async -> 스크립트 우선 로드 후 페이지 읽는 속성

----
## 자바스크립트 문법

### function 함수명(){재사용문법}
* 특정 기능을 하는 구문을 묶어 재사용하는 문법 ==함수
* 함수명은 id처럼 한번만 사용 가능
### var data_create; 선언키워드 + 변수명 
### data_create=3; 변수명 + 대입연산자 + 변수값 => 3을 data_create에 대입한다

## 데이터(객체)
### 프로그래밍을 작성하는 데 가장 중요한 요소
### 알고리즘(절차)를 표현하기 위한 필수 요소
### 데이터 값을 저장하는 저장소 
### 원하는 데이터를 변수에 담는다! 어떤 데이터가 필요한지, 어느 저장소에 담을지 생각하기.
* 변수=데이터저장소=그릇 / 대입을 하기 전에는 변수는 비어 있다. 비어 있는 변수에 데이터를 대입하자!
* 하나의 변수에는 하나의 데이터만 담을 수 있다. 새로운 데이터를 담으면 기존 데이터는 사라짐.
* 다른 데이터를 추가하고 싶다면 변수를 추가해야 함.

## 변수 작성하기
* 변수의 이름은 문자(a~z,A~Z), 숫자(0~9), 달러($), 밑줄(_)이 포함된다.
* 변수의 이름은 시작할 수 없다.
* 변수의 이름은 대시(-)나 마침표(.)를 사용할 수 없다.
* 키워드나 예약어는 사용할 수 없다. -> function, var, class 등을 변수 이름으로 사용 불가.
* 모든 변수는 대/소문자를 구별한다, score와 Score는 다른 변수!
* 변수가 저장할 정보의 종류를 표현하는 단어를 사용해야 한다.

### 객체.속성; 객체.메소드();

# javascript(ECMAScript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`,`<body>`, 내에 `<script>`작성 가능
* 내부스크립트 `<script>~<script>`
* 외부스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`, `async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류 
1. `var` : 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수 선언문 
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 `x + 1` 서로 다른 데이터를 연결해줌
3. `+=` : 복합대입연산자 `x += y` -> `x = x + y`
-----------------
# 23/12/21

### 원시 타입(primitive type)
* 데이터를 룩성하는 가장 기본적 요소
숫자 문자열 논리값 undefined null sul
### 객체 타입(reference)
* 참조 타입에 따라 달라지는 형식의 타입

### 데이터 타입 연산자 typeof
*`typeof 데이터; typeof(데이터);`
* 피연산자가 2개 이상일 때 괄호 사용 必

### 숫자 데이터
* 64비트 부동소수점으로 표현
* 수학연산, 비교연산, 조건문, 반복문 등 많은 정밀도 계산에 활용
* C, c++ JAVA PYthon, JAVAscript windows macOS Linux
var a = 123.456;
var b = 789.012;
var c = 100
var d = 0

### 문자 데이터
* 16비트 유니코드(UTF-16) 전세계 사용 문자 대부분 표현 가능
* 작은따옴표('') 큰따옴표("") 문자열의 앞 뒤에 붙여서 표현
"3.14"/'자바스크립트 문자 데이터'/"Javascript"/""(빈 문자열)

### 특수 데이터

### 값이 없음 null (type == object)
* 값이 존재하지 않는 상태 / 비어있는 상태
* 존재하는 변수값을 제거해야 할 때, 즉 값이 원래는 있었는데 지워야 하는 상황에 사용. // undifined와 개념 다름, undefined는 값이 아예 정의되지 않은 상태.
* 

### 정의되지 않음 undefined (type == object)
* 값을 아직 할당하지 못한 변수 
* 없는 객체의 속성을 읽으려 시도했을 때 값 
* 없는 배열 요소를 읽으려 시도했을 떄 값
* 아무것도 반환하지 않은 함수가 반환한 값의 함수를 호출했을 때 전달받지 못한 인수 값. 
* // 내가 지금 실수했나? 확인 가능 // 분명히 썼는데 왜 undefined가 뜨지? -> 뭔가 실수함
* 실수했을 때 뜨는 건 맞는데 어떤 실수일지는 모름.. 정의하지 않아서 오류가 난 건지 대상 자체가 없어서 난 건지 잘 구분하고 정리하자.

### 변수 = 0(number); 
* 숫자 초기화
* null과는 다름!

### 템플릿 문자열
* 백틱기호로 묶으며 &{}를 이용한 식으로 문자열을 간편하게 쓰는 기법

### 날짜 표현
`let mon = now.getMonth()+1;` 0부터 1월로 인식하므로 +1 해주기
`let day = now.getDate();`
`let ye = now.getFullYear();`
`console.log(mon, day, ye)` 

## 배열과 객체
### Array
* 2개 이상의데이터를 변수에 저장하는 방법 == 배열

### 배열 생성과 호출
* let 변수명 = [배열,배열,배열]
* let 변수명 = new Array (배열,배열,배열)
* let 변수명 = new Array(3)

### 배열(index)은 0부터 시작, length(총갯수)는 1부터 시작
* const alpa = ['ABC','DEF']
* console.log(`배열은 0부터 시작하기 때문에 ABC를 출력하고 싶으면 ${alpa[0]}`)
* console.log(`배열의 개수 확인 => ${alpa.length}`) //2개

------------------
# 23/12/26

## 배열 속성

### 배열 이름만 작성하기
* `console.log(nameArray)`
* 배열 이름만 작성하면 배열의 정보가 나옴 (테스트용)
* 단순 테스트용으로 실제 사용 시에는 index 작성해줘야 함

### push 배열 값 추가 / 끝
* `const nameArray = ['김','이','박','최'];`
* `nameArray.push('수');`
* `=> (5) ['김', '이', '박', '최', '수']`
* push => 배열의 마지막에 값을 추가하는 속성

### unshift 배열 값 추가 / 시작
* `nameArray.unshift('방');`
* unshift => 배열의 시작에 새로운 값 추가하는 속성

### pop 배열 값 제거 / 끝
* `nameArray.pop();`
* pop 배열의 끝 값 제거하는 속성

### shift 배열의 값 제거 / 시작
* `nameArray.shift(); `
* shift 배열의 시작 값 제거하는 속성

-----------------

## 배열에 값 추가하기~~(ex-영화 예매 등)

### 배열 준비 후 값 추가하기
* `const movie = new Array(8)` // 빈 배열 8개 추가
* `movie[0] = 'a1'` // 0번째 인덱스에 값 추가
* `(8) ['a1', empty × 7]` // 결과

### 배열 비워두고 추가하기
* `const megabox = new Array();` // 배열 비워두기, 값을 적지 않아도 배열로 인식.
* `megabox.push('A1')` // 배열의 맨 끝에 값 추가
* `['A1']` // 결과
* 이후에 js 코드로 일정 수 이상 추가되지 않도록 설정할 수 있음.

------

## 객체 Object

### 속성:값{}
* `const cat = {`
    `color:'black',`
    `age:1`
`}`
* 중괄호 안에 엔터 치고 써주기
* 객체에는 index, length가 없음.
* 여러 개의 데이터가 들어가는 복잡한 부분에는 객체를 많이 사용함.

### 객체의 값을 따로 뺴기 
* `변수 이름.속성`
* `console.log(cat.color);` // black

### 객체 속성에 배열 사용하기도 가능
* `const cat2 = {`
    `color:['흰색','노란색','검정색'],`
    `age:2,`
`}` // 값 부분에 대괄호 사용하기.
* `console.log(`고양이의 털 색깔은 ${cat2.color[1]}, ${cat2.color[0]}, ${cat2.color[2]}로 이루어져 있습니다.`);`
* 위와 같이 값 따로 불러오기 가능.
* 속성 이름에 따옴표 넣고 띄어쓰기 가능. // 'cat type':'코리안 숏헤어'
* 위 경우에는 속성 불러올 때 대괄호 형식으로 써야 함.
`console.log(cat3.'cat type');` // XXXXXXX
`console.log(cat3['cat type']);` // OOOOOOO

### delete 속성 제거
* `delete reservation.option;` // {room: 2, adult: 2, children: 1}
* 속성 자체를 없애버림

### delete로 제거한 속성 추가하기
* `reservation.option = '금연'` // {room: 2, adult: 2, children: 1, option: '금연'}
* 이전에 제거한 속성명을 변수 생성하듯 입력해주기.

### 객체에 함수 넣기
* `const user = {`
    `name:'박',`
    `age:2,`
    `birthday:function(){` <!-- 익명함수 -->
        `console.log('생일ㅊㅋ')`
    `},`
`}`
* `console.log(user.birthday())` 
* 값이 규칙에 따라 변하는 속성을 넣을 때는 함수를 활용한다.
* 함수를 불러올 때는 ()괄호도 잊지 않고 써 줘야 오류 없이 가능함~
* 익명함수 : 함수명이 없고 앞 글자가 이름 대신함
-------------
# 23/12/27

## 자바스크립트의 역할
* 스크립트 사용 웹 -> 동적
* 파일 읽기와 쓰기, 키보드 입력
* 데이터 베이스 기능
* 비동기 통신
* 2차원 3차원 컴퓨터 그래픽스 기능
* 마우스 드래그 앤 드롭
* 멀티 스레딩

## BOM(Browsre Object Model)
* window 객체는 생략 가능 / 당연히 있기 때문에
* 객체.메서드() 형식

### alert
* `let m1 = window.alert('popup');`
`console.log(m1);`
*  == popup이라는 메세지를 alert로 팝업으로 띄우고 그 결과를 콘솔에 출력한다. // undefined
* alert의 값을 콘솔에 출력.
* 변수에 실행 메서드, 실행 함수가 들어갈 때는 그 함수 자체가 변수에 들어가는 게 아니라 그 결과값이 들어간다.

### prompt
* `const qa1 = window.prompt('당신의 나이는?','')`
* window.prompt(질문,대답) // 답변 생략가능
* 질문에 대한 대답 입력 가능한 팝업
* 기본적으로 문자 데이터로 저장됨.

### confirm
* ` const ok = window.confirm('결제하시겠습니까?')`
* true, false 형식의 데이터로 저장됨.

### window.print();
* 인쇄 창 띄우기~
* `onclick="window.print()"` 인쇄버튼 만들기

## window.location
* 문서의 URL을 관리하는 객체 속성
* 옆에 이중 속성이 들어감
* assign, href,
* 연달아 속성이 있는 경우 99% 앞이 값. 뒤는 속성이거나 메소드
ex- window.document.write

### href
* a태그와 달리 자바스크립트 활용하여 사이트 이동해야 할 때 사용
* `window.location.href='https://naver.com/'`

## window.document
* `window.document.write("테스트 문구")`
* `window.document.body("테스트 문구")`
* 현재 창의 문서 읽기, 쓰기, 수정

## window.open(url,target,features)
* `window.open('https://google.com','_blank','width=500, height=300')`
* 새로운 창을 열거나 새 탭을 생성하는 메서드

----------
# 23/12/28

## DOM(Document Object Model)
* DOM 트리를 구성하는 객체 -> 노드(Node)
* HTML 요소를 가리키는 객체 -> HTML 요소 노드
* 텍스트를 가리키는 객체 -> 텍스트 노드
* 탭, 공백, 줄바꿈 -> 공백 노드

## getElementsByTagName()

* 저장된 태그 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 변환
* 대소문자 구별 주의, s 붙음 주의
* CSS와 다르게 부모를 설정하면 그 안에 있는 자식, 자손 모두를 인식함.
-> 태그를 같이 확인하며 맞는 인덱스를 잘 작성해야 한다!!

### 여러 상황에 활용하기 

* 필요한 TagNode가 2개 이상일 때 1개만 동적 기능 적용이 필요하다면?
-> 변수 선언 시 [index번호] 설정하고 대입 
* ex - `const h1Tag = document.getElementsByTagName('h1')[1]`

* 필요한 TagNode가 2개 이상일 때 여러 개에 동적 기능 적용이 필요하다면?
-> 변수 선언 시에는 그냥 전부 대입, 호출 시에 필요한 [index번호] 사용.
* ex - `console.log(h1Tag[0]);`

### DOM Node 변수 지정 시

* HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용! 
* 실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할 때는 직접적인 접근으로 대상을 하나씩 개별 인식하게 만들어야 한다. [index]

* `const ulTag = document.getElementsByTagName('ul')[0];`
* html에 ul이 하나밖에 없는데 [0]을 왜 붙여야 할까?
-> 정확히 원하는 태그를 잡아야 하기 때문에.
* [0] 붙이지 않으면 HTMLCollection으로 출력
* 즉, 태그가 파일에 하나밖에 없더라도 정확히 원하는 대상을 인식하기 위해 인덱스를 붙여 주는 것이 좋다.

* `let a2Tag = liTag[1].getElementsByTagName('a');`
* == ul>li*4>a 중 두 번째 a를 잡은 경우
* css 선택자처럼 폭포식으로 선택하되, 작성은 바로 앞의 부모만 한다.
* 두번째 li의 자식 a를 선택하는 것이므로 liTag에 인덱스[1]을 붙여준다.

## getElenentsByclassName()

* 지정된 클래스 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환.
* 자유도가 높기 때문에 조심! 누구에게 적용하고 싶은지 정확히 확인하고 사용하자.

* `const ulT = document.getElementsByTagName('ul')[0];`
`const listT = ulT.getElementsByClassName('list');`
* ul의 자식 li 중 클래스 list를 잡는 것이므로 ul태그를 먼저 변수에 담아주기 -> 클래스 변수 선언 시 ul태그 변수를 넣어주기.

## getElementByID()

* 지정된 아이디 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환.
* 어차피 문서에 하나씩밖에 존재하지 않기 때문에 부모 작성할 필요 없음~ 다 document로 작성.
* `const main_title = document.getElementById('main_title')`

## querySelector()

* 지정된 아이디, 클래스 ,태그 이름을 가진 첫번째 HTML요소를 찾아 HYML 노드로 반환 (최신기능!)

## querySelectorAll()

* 지정된 아이디, 클래스, 태그 이름을 가진 첫번쨰 HTML 요소를 찾아 HTML 노드로 반환
* 여러 개의 Node List를 반환할 수도 있고 첫 번째 Node list를 반환할 수도 있음!

## 명시적, 암시적 형변환

### 암시적 형변환
* 스크립트가 개발자 동의 없이 자동으로 데이터 형태를 결정하는 것
ex- 숫자+문자 = 문자

### 명시적 형변환
* 개발자가 직접 스크립트 이용해 어떤 형으로 바꿀지 명시해주는 것
* Number() -> 데이터 타입을 숫자로 변형

-------------

## 자바스크립트 문법(지대중요)

* 자바스크립트는 오른쪽에서 왼쪽으로, 괄호 안부터 읽음

### 맞는 예시
* 객체.속성.메서드()
* 객체.메서드()
* 메서드(객체.속성)
* 메서드(객체.메서드)
* 메서드(객체,속성,메서드)

### 틀린 예시
* 객체.메서드(),메서드() -> XXXXXXXXXXXXX
* 객체.메서드().속성 -> XXXXXXXXXXXXXXX

--------------

### NAN == Not a Number
* 숫자만 입력하는 곳에 문자 쓸 경우 출력 

--------------------

## Number()
* 문자타입 데이터를 숫자타입으로 변경해주는 메서드
 
## value 속성
* form 태그(input, button, textarea, select, option)에 들어가는 값 속성
* form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
* javascript의 DOM.속성 `ex)DOM.value` 로 처리했을 떈 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등..
* 주의! value 속성은 form 전용이므로 다른 태그일 때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의! `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 떄문에 필요한 경우 `Number()`메서드를 활용해 (Number) 데이터타입으로 변환해야 한다.  

### input에 작성한 문구를 콘솔에 나오게 하려면?
* `console.log(numInput.value); ` // 메서드(객체.속성)

### input type:number 에 작성한 문자데이터를 숫자데이터로 바꾸려면? // (dom_type1.js 참고)
* `let result = Number(numInput.value)` 
* `console.log(typeof numInput.value);` // 일회성

---------------

### ⚠ 기억하기!
1. 중간마다 콘솔로 확인하기
2. 단계별로 결과 생각하며 하기 / 헷갈리면 주석으로 그 단계까지의 결과 적어두기
3. 순서와 위치도 생각하며 하자~

-----------------------------
# 1/2

## HTML 요소에 이벤트 처리기 등록

onclick 클릭했을 때
onmouseover 마우스 HTML 요소 올라갔을 때
onmouseout 마우스가 HTML 요소에서 벗어났을 때
onchange input 요소의 값이 변경되었을 떄
onsubmit 폼 제출버튼을 눌렀을 때
onload HTML 요소를 모두 읽었을 때

## 이벤트 리스너 등록과 삭제
 
* 이벤트대상.addEventListener(이벤트종류, 이벤트콜백함수, 이벤트단계(생략가능))
* 이벤트단계는 true,false(기본값) 중 하나로 설정할 수 있다

* 하나의 요소에 여러개의 이벤트 리스너 등록 가능
* HTML 요소를 포함 모든 DOM 노드에 이벤트 리스너 등록 가능
* 다양한 추가메서드를 이용하여 이벤트를 정말하게 제어 가능

------------------

## [작성 시 기억하기]

* html노드와 값 잘 구분하기
* 중간 변수 적절하게 만들어주기
* 단계별로 console.log 확인

----
## DOM 관계속성

* parentNode 부모 노드
* parentElement 부모 요소 참조
* childNodes 자식 요소 참조
* firstChild 첫번째 자식 노드
* firstElementChild 첫번째 자식 요소 참조
* lastChild 마지막 자식 노드
* lastElementChild 마지막 자식 요소 참조

-----------
## 자바스크립트에서 css스타일 적용 시

* 인라인 스타일로 적용됨
* 인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로 기존 css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선적용된다.

1. 객체.객체.속성 = '속성:값; 속성:값; 속성:값;'
* `aNode[0].parentNode.style = 'background-color:yellow';`
* 따옴표 안에 css처럼 원하는 속성 다 쓰기
* 2번 이상 생성 시 이전 속성:값 초기화

2. 객체.객체.속성.속성 = '값'
* `aNode[1].parentNode.style.backgroundColor = 'aqua';`
*  - 부분은 카멜 표기법으로 바꿔줘야 함
* 2번 이상 생성 시 기존 속성값에 이어서 추가됨.
* 한번에 한가지 속성만 가능, 추가시 줄 추가해야 함

----
# 24/1/3
## DOM 관계속성
* 속성.속성 형식으로 연속 사용 가능.

### 부모 노드 제어하기

* parentNode 부모 노드
* parentElement 부모 요소
* `자식 또는 자손노드.parentElement` -> 특정 자식의 부모 요소 잡기

### 자식 노드 제어하기

* childNodes 자식 노드 / (공백도 잡힘) 
* children 자식 요소 
* childElementCount 자식요소 갯수 카운트 (쇼핑몰 사용)

* childNode 텍스트노드가 필요할 때 children 요소 노드가 필요할 때 주로 사용

* `console.log(h_text[0].length` length 글자수 출력
* `console.log(h_text[0].data` data 데이터 출력
* `console.log(h_text[0].baseURI` IP주소 출력
*  `headerChild[1].innerText = "로고";` 
innerText로 읽을 때는 텍스트만 읽지만, 대입연산자를 사용하면 h1안의 모든 자식 자손을 통째로 바꿔버림 == `<h1><a>logo</a></h1>` -> `<h1>로고</h1>`
* 텍스트 안에 `<br>`등 태그가 들어갈 때는 `innerText`가 아닌 `innerHTML` 써줘야 인식

### 형제 노드 제어하기

*  이전 형제 previousSibling, previousElementalSibling
*  다음 형제 nextSibling, nextElementalSibling

### 첫째, 막내 자식 노드 잡기
* firstChild, firstElementChild
* lastChild, lastElementChild

### 객체.innerHTML 
* `객체.innerHTML;` 특정 객체의 자식, 자손 HTML 읽기
* `객체.innerHTML = 값;` HTML 삽입 및 변경
### innerText 속성
* `객체.innerText;` 객체의 자식,자손 텍스트 노드 읽기
* `객체.innerText = 값;` 텍스트 노드 삽입 및 변경

### 객체.appendChild()
* 객체의 마지막 자식 위치로 () 추가
* `객체.appendChild();`
* `객체.객체.appendChild()`
* `객체.속성.appendChild()`
* `객체.속성.속성.appendChild()`

### createElement
* `document.createElement()`
* 자바스크립트 내에서 동적인 용도로 요소 노드 생성

### removeChild(), remove()
* removeChild() 객체 제거
* remove() 자식만 제거
----

## 데이터를 쌓는 방법 

* `1. 객체.innerHTML += '내용` // 복합대입연산자 사용
* `2. 객체.appendChild(삽입노드);` // 삽입노드 사용

* `const error_create = document.createElement('ul');`

loginBtn.addEventListener('click',function(){
    error_create.innerHTML += '<li>아이디 입력하세요</li>';
    error.appendChild(error_create);
    console.log(error);
    error.innerHTML = '<em>아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다신 확인해주세요.</em>';
    console.log(error);
})

----
## insertBefore

* 객체의 첫번째 자식노드 추가
* `객체.insertBefore(삽입노드, 기존 시작 자식노드)`
* `부모.insertBefore(삽입노드, 부모.firstChild)`

----
## 이벤트들

* input : input에 입력했을 때 실행
* blur : input을 벗어날 때 실행

----
# 1/9

## 표현식과 연산자
* 표현식 -> 변수, 함수 등의 값을 바탕으로 계산하는 행위
* 연산자 -> 표현식을 조합하여 더욱 복잡한 표현식을 만들어 계산하는 행위
  (-x 단항연산자 x-y 이항연산자 condition?x:y 삼항연산자)

## 피연산자가 숫자인 경우 -> 산술련산자

### 산술 이항 연산자
* a+b 문자+문자(연결) 문자+숫자(연결) 숫자+숫자(더하기)
* a-b 빼기
* a*b 곱하기
* a.b 나누기
* a%b 나머지 (나누기 한 후 나머지 값)
* 계산할 수 없는 경우는 NaN 처리 ex- 'two'*2 = NaN

### 산술 단항 연산자 - 증감연산자

* 1보다 클 때 복합 1일때 증감연산자 많이 사용

* ++a a에 1을 더한 후 a값을 처리한다
* a++ a에 처리 후 adp 1을 더한다
* --a a에 1을 뺀 후 a값을 처리한다
* a-- a를 처리 후 a에 1을 뺀다.
* 전위연산 : 연산자가 앞에 있음. (b=++a => ++a의 값에 1을 더하고 a를 b에 대입한다)
* 후위연산 : 연산자가 뒤에 있음. (b=a++ => a의 값이 b에 대입된 후 a의 값에1을 더한다)
---
### 복합연산자

* 산술연산자와 대입연산자를 붙여서 사용하는 연산자
* 기존 값에 계산이 필요할 때 사용함
* += / a+=b => a = a+b 
* -= / a-=b => a = a-b
* *= / a*=b => a = a*b
* /= / a/=b => a = a/b
* %= / a%=b => a = a%b

### 삼항연산자

* `조건 ? 조건값이 참일 때 실행 결과 : 조건값이 거짓일 때 실행 결과`
* 조건에 따라 참과 거짓을 구분하는 데 사용하는 연산자
* = 대입연산자 / == 비교연산자 (데이터가 같다)

### 문자열 연산자

* 피연산자 중 하나라도 문자일 경우 문자열 연산자가 됨

## 프론트엔드
* react + database
* 실무진 카페
* 세미나

# 🍦 변수와 출력 구분 잘 해서 쓰기. 만들어둔 변수로 효율적으로 출력하기!!

## 함수스코프(function-scope) = 지역변수와 전역변수
* == 함수가 접근할 수 있는 위치

1. 지역변수 (block-scope)
* 함수 내부에서 선언된 변수
* 함수 내에서만 접근 가능

2. 전역변수 (global-scope)
* 함수 외부에서 선언된 변수
* 스크립트 전체 어디서든 접근 가능

