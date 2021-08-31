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

// var add = (first, second) => {
//   return first + second;
// };

// var add = (first, second) => first + second;
// var addAndMultiple = (first, second) => ({
//   add: first + second,
//   multiply: first * second,
// });

// function addNumber(num) {
//   return function (value) {
//     return num + value;
//   };
// }
// var addNumber = (num) => (value) => num + value;

// class MyClass {
//   value = 10;
//   constructor() {
//     var addThis2 = function (first, second) {
//       return this.value + first, second;
//     }.bind(this);
//     var addThis3 = (first, second) => this.value + first + second;
//   }
// }

// var x = 0;
// var y = 0;
// var obj = { x, y };
// var randomKeyString = "other";
// var combined = {
//   ["one" + randomKeyString]: "some value",
// };
// var obj2 = {
//   x,
//   methodA() {
//     console.log("method A");
//   },
//   methodB() {
//     return 0;
//   },
// };
//객체 확장 표현식 예제

// var List = [0, 1];
// var [item1, item2, item3 = -1] = List;
// [item2, item1] = [item1, item2];
// var obj = {
//   key1: "one",
//   key2: "two",
// };
// var { key1: newKey1, key2, key3 = "default key3 value" } = obj;
// 구조 분해 할당 예제

// var [item1, ...otherItems] = [0, 1, 2];
// var { key1, ...ohters } = { key1: "one", key2: "two" };
// 구조 분해 할당 전개연산자 같이 사용 예제

// function parse(qs) {
//   const queryString = qs.substr(1);
//   const chunks = queryString.split("&");
//   let result = {};
//   chunks.foreach((chunk) => {
//     const parts = chunk.split("=");
//     const key = parts[0];
//     const value = Number.isNaN(Number(parts[1]) ? parts[1] : Number(parts[1]));
//     result[key] = value;
//   });
//   return result;
// }
// foreach 함수 사용 예제

// function parse(qs) {
//   const queryString = qs.substr(1);
//   const chunks = qs.split("&");
//   const result = chunks.map((chunk) => {
//     const [key, value] = chunk.split("=");
//     return (result[key] = value);
//   });
//   return result;
// }
// foreach 함수 구조분해할당 같이 사용 예제

// function parse(qs) {
//   const queryString = qs.substr(1);
//   const chunks = qs.split("&");
//   const result = chunks.map((chunk) => {
//     const [key, value] = chunk.split("=");
//     return { key: key, value: value };
//   });
//   return result;
// }
// map 함수 사용 예제

// function sum(numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// const total = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(total);
// reduce 함수 예제

// function parse(qs) {
//   const queryString = qs.substr(1);
//   const chunks = qs.split("&");
//   return chunks
//     .map((chunk) => {
//       const [key, value] = chunk.split("=");
//       return { key, value };
//     })
//     .reduce((result, item) => {
//       result[item.key] = item.value;
//       return result;
//     }, {});
// }
// reduce map 함수 함께 사용 예제

class Promise {
  constructor(fn) {
    const resolve = (...args) => {
      if (typeof this.onDone === "function") {
        this.onDone(...args);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    };
    const reject = (...args) => {
      if (typeof this.onError === "function") {
        this.onError(...args);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    };
    fn(resolve, reject);
  }
  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
  }
  catch(onError) {
    this.onError = onError;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업1 완료"), 100);
  });

const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업2 완료"), 200);
  });

const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("작업3 완료"), 300);
  });

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
