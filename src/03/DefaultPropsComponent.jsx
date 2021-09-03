const DefaultPropsComponent = ({ boolValue, boolValueWithoutDefault }) => {
  let message1 = "";
  if (boolValue === false) {
    message1 = "boolValue 기본값이 false입니다.";
  }
  let message2 = "";
  if (boolValueWithoutDefault === false) {
    message2 = "boolValueWithoutDefault 기본값이 true입니다.";
  }
  return (
    <div>
      {message1}
      {message2}
    </div>
  );
};

// DefaultPropsComponent.PropTypes = {
//   boolValue: PropTypes.bool,
//   boolValueWithoutDefault: PropTypes.bool,
// };

DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
