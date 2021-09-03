import PropTypes from "prop-types";

const ChildComponent = ({
  boolValue,
  numValue,
  arrayValue,
  objValue,
  nodeValue,
  funcValue,
}) => {
  return (
    <div>
      <span>{boolValue}</span>
      <span>{numValue}</span>
      <span>{arrayValue}</span>
      <span>{String(objValue)}</span>
      <span>{nodeValue}</span>
      <span>{String(funcValue)}</span>
    </div>
  );
};

// ChildComponent.PropTypes = {
//   boolValue: PropTypes.bool,
//   numValue: PropTypes.number,
//   arrayValue: PropTypes.arrayOf(PropTypes.number),
//   objValue: PropTypes.object,
//   nodeValue: PropTypes.node,
//   funcValue: PropTypes.func,
// };
// 오류 추후 수정

export default ChildComponent;
