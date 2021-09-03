import { object } from "prop-types";
import PropTypes from "prop-types";

const ChildComponent2 = ({ objValue, requiredStringValue }) => {
  return (
    <div>
      <div>객체값 : {String(Object.entries(objValue))}</div>
      <div>필수값 : {requiredStringValue}</div>
    </div>
  );
};

// ChildComponent2.PropTypes = {
//   objValue: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number,
//   }),
//   requiredStringValue: PropTypes.string.isRequired,
// };
//오류 추후 수정

export default ChildComponent2;
