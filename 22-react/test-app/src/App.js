import logo from './logo.svg';
import './App.css';
// import '../src/p6.css';

function App() {
  const name = '미농';
  const Name = '하루';
  const animal = '강아지';
  const a = 6;
  const b = 3;
  const title = 'Hello World';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };
  return (
    // 하나의 부모요소로 감싸져있음.
    <div className="App">
      {/* 자동생성코드 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 하나로 감싸진 요소  */}
      <>
        {/* js 문법 사용 
          - {}로 감싸면 js 표현식 사용 가능 
          - {} 안에서 삼항 연산자 사용 가능(if, for문 사용 불가)*/}
        <div>{name} 안녕? </div>
        <div>
          {student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}
        </div>
        {/* 3. style 속성
            - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
            - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야 함(ex. backgroundColor)
             */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'blue',
            fontSize: '48px',
          }}
        >
          스타일 적용2
        </div>
        {/* 4. className 사용 
            - class 속성이 아닌 className 속성 사용  (ex. <div className = "App"> ) 
            
            5. 종료 태그가 없는 태그 사용
              - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing 
              - <input /> => 셀프클로징 or <input></input>
            6. 주석
              - // :jsx 외부주석
              - {* *} : js 내부 주석
              */}
        <div>
          이것은 div입니다 <h3>이것은 div안에 있는 h3 태그 입니다.</h3>
        </div>
        <h2>
          제 반려 동물의 이름은 {Name} 입니다. {Name}는 {animal} 입니다.
        </h2>
        {3 + 5 == 8 ? <span> 정답입니다!</span> : <span> 오답입니다!</span>}
        {a > b && <p>a가 b보다 큽니다.</p>}
        <div className="test">
          <div
            style={{
              backgroundColor: '#f0d99b',
              color: 'orange',
              fontSize: '48px',
            }}
          >
            {title}
          </div>
          <br></br>
          <div className="input">
            <div>
              아이디 : <input></input>
            </div>
            <br></br>
            <div>
              비밀번호 : <input></input>
            </div>
          </div>
        </div>
        <div className="rainbow">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="navy"></div>
          <div className="purple"></div>
        </div>
      </>
    </div>
  );
}

export default App;
