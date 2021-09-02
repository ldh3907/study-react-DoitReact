import PropTypes from "prop-types";

const PropsComponent = ({ message }) => {
  return <div>{message}</div>;
};

PropsComponent.prototype = {
  message: PropTypes.string,
};

export default PropsComponent;
