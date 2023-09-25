import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import book from './Functionpr';
import Button from './Button';
import Test from './Test';
import Test2 from './Test2';
import Props from './propspr';
import classpr from './classpr';

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent name="미녕" />
      <FunctionComponent />

      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">Google</Button> */}
      <hr />
      <Test />
      <Test2 />
      <hr />
      <Props/>
      <hr />
      <Props
   title="나의 하루는 4시 40분에 시작된다"
   author="김유진"
   price="13,500원"
   type="자기계발서"
  />
      <hr />
      <classpr text=/>
    </div>
  );
}

export default App;
	// /////////////////////



  
.all {
  text-align: center;
  width: 500px;
  height: 500px;
  background-color: beige;
}
 
.best {
  font-size: 35px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  color: coral;
}
 
.book_img {
  width: 140px;
  height: 200px;
  padding-bottom: 20px;
}
 
.title {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
 
.content {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 50px;
  padding-bottom: 10px;
}



  
import React from 'react';
import Props from './ex/Props_ex1';
 
const App = () => {
 const my_func = () => {
  console.log("콘솔 띄우기 성공!");
 };
 
 return (
  <div>
   <Props
    text="App 컴포넌트에서 넘겨준 text props입니다."
    valid={ my_func }
   />
  </div>
 );
};
 
export default App;