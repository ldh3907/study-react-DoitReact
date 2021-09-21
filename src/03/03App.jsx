import React from "react";
import BooleanComponent from "./BooleanComponent";
import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";
import ChildProperty from "./ChildProperty";
import Counter from "./Counter";
import DefaultPropsComponent from "./DefaultPropsComponent";
import LifecycleExample from "./LifecycleExample";
import MyComponent from "./MyComponent";
import NewCounter from "./NewCounter";
import PropsComponent from "./PropsComponent";
import SFC from "./SFC";
import TodaysPlan from "./TodaysPlan";
import ToDos from "./ToDoList";

const ThirdApp = () => {
  //   const array = [1, 2, 3];
  //   const obj = { name: "제목", age: 30 };
  //   const node = <h1>노드</h1>;
  //   const func = () => {
  //     console.log("메세지");
  //   };

  return (
    <div className="body">
      {/* <TodaysPlan />
      <MyComponent name="message" />
      <PropsComponent message="hi" />
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={array}
        objValue={obj}
        nodeValue={node}
        funcValue={func}
      />
      <div>
        <b>지루할 때 : </b>
        <BooleanComponent bored />
      </div>
      <div>
        <b>즐거울 때 : </b>
        <BooleanComponent />
      </div>
      <ChildComponent2 objValue={{ age: "20살" }} requiredStringValue="문자" />
      <DefaultPropsComponent />
      <ChildProperty>
        <div>
          <span>자식 노드</span>
        </div>
      </ChildProperty>
      <LifecycleExample /> */}
      <ToDos />
    </div>
  );
};

// class ThirdApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 10 };
//     this.resetCount = this.resetCount.bind(this);
//   }
//   resetCount() {
//     this.setState(({ count }) => ({ count: count + 10 }));
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <Counter count={this.state.count} />
//         </div>
//         <div>
//           <NewCounter count={this.state.count} />
//         </div>
//         <button onClick={this.resetCount}>
//           {this.state.count + 10}으로 초기화
//         </button>
//       </div>
//     );
//   }
// }

export default ThirdApp;
