import PropTypes from "prop-types";

const Button = ({ text, showAddTask }) => {
	return (
		<button className="btn" onClick={showAddTask}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	text: "Sample Button",
};

Button.prototype = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
