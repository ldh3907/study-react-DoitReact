import MyComponent from "./03/MyComponent";
import PropsComponent from "./03/PropsComponent";
import TodaysPlan from "./03/TodaysPlan";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <TodaysPlan />
      <MyComponent name="message" />
      <PropsComponent message="hi" />
    </div>
  );
};

export default App;
