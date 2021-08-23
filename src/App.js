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
// 객체 전개 연산자 예제

// let num = 1;
// num = num * 3;
// let str = "문자";
// str = "다른문자";
// let arr = [];
// arr = [1, 2, 3];
// let obj = {};
// obj = { name: "새 객체" };
// 가변 변수 예제

// const num = 1;
// num = 2;
// const str = "문자";
// str = "새 문자";
// const arr = [];
// arr = [1, 2, 3];
// const obj = {};
// obj = { name: "내 이름" };
//const 타입 변수 할당으로 값 변경 예제

// const arr2 = [];
// arr2.push(1);
// arr2.splice(0, 0, 0);
// arr2.pop();
// const obj2 = {};
// obj2["name"] = "내이름";
// Object.assign(obj2, { name: "새이름" });
// delete obj2.name;
// const 타입 변수 함수로 값 변경

// const num1 = 1;
// const num2 = num1 * 3;
// const str1 = "문자";
// const str2 = str1 + "추가";
// const arr3 = [];
// const arr4 = arr3.concat(1);
// const arr5 = [...arr4, 2, 3];
// const arr6 = arr5.slice(0, 1);
// const [first, ...arr7] = arr5;
// const obj3 = { name: "내이름", age: 20 };
// const objValue = { name: "새이름", age: obj3.age };
// const obj4 = { ...obj3, name: "새이름" };
// const { name, ...obj5 } = obj4;
//무결성 제약 규칙을 지키면서  불변 변수 값 변경 예제

// class Shape {
//   static create(x, y) {
//     return new Shape(x, y);
//   }
//   name = "Shape";
//   constructor(x, y) {
//     this.move(x, y);
//   }
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   area() {
//     return 0;
//   }
// }
// 클래스 예제

// class Circle extends Shape {
//   constructor(x, y, radius) {
//     super(x, y);
//     this.radius = radius;
//   }
//   area() {
//     if (this.radius === 0) return super.area();
//     return this.radius * this.radius;
//   }
// }

// var c = new Circle(0, 0, 10);
// c.area();
//클래스 상속 예제

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
