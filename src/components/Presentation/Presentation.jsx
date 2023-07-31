import PropTypes from "prop-types";
import { Text } from "./Presentation.styled";

export const Presentation = ({ text }) => {
	return <Text>{text}</Text>;
};

Presentation.propTypes = {
	text: PropTypes.string.isRequired,
};