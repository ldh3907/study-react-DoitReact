import { Component } from "react";
import "./App.css";

// var string1 = "안녕하세요.";
// var string2 = "반갑습니다.";
// var greeting = `${string1 + string2}`;
// var product = { name: "도서", price: "4200원" };
// var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
// 템플릿 문자열 예제

// var array1 = ["one", "two"];
// var array2 = ["three", "four"];
// const combined = [...array1, ...array2];
// const [first, second, three = "empty", ...others] = array1;
// function func(...args) {
//   var [first, ...others] = args;
// }
// 배열 전개 연산자 예제

// var objectOne = { one: 1, two: 2, other: 0 };
// var objecttwo = { three: 3, four: 4, other: -1 };
// var combined1 = {
//   ...objectOne,
//   ...objecttwo,
// };
// var combined2 = {
//   ...objecttwo,
//   ...objectOne,
// };
// var { other, ...others } = combined2;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">두잇! 리액트 시작하기</h1>
        <div></div>
      </div>
    );
  }
}

export default App;
