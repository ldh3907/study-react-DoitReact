import BooleanComponent from "./BooleanComponent";
import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";
import ChildProperty from "./ChildProperty";
import DefaultPropsComponent from "./DefaultPropsComponent";
import MyComponent from "./MyComponent";
import PropsComponent from "./PropsComponent";
import TodaysPlan from "./TodaysPlan";

const ThirdApp = () => {
  const array = [1, 2, 3];
  const obj = { name: "제목", age: 30 };
  const node = <h1>노드</h1>;
  const func = () => {
    console.log("메세지");
  };
  return (
    <div className="body">
      <TodaysPlan />
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
    </div>
  );
};

export default ThirdApp;
