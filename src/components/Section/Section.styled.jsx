import styled from "styled-components";

export const SectionWrap = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px 0;
	max-width: 100%;
	width: 600px;
	color: ${props => props.theme.colors.black};
	text-shadow: 0 -0.4px 0.4px #fff, 0.4px 0.4px 0.4px #000000b0;
	/* background-color: #d9faf0;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16); */
`;

