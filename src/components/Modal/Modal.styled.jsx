import styled from "styled-components";

export const BorderOutside = styled.div`
	padding: 8px;
	margin: 0 auto;
	width: 200px;
	border-radius: 50%;
	border: none;
	margin-bottom: 10px;
	box-shadow: inset 2px 2px 4px #9da2b6, inset -5px -5px 8px #fff;

	&:hover,
	&:focus {
		box-shadow: inset 1px 1px 2px #9da2b6, inset -1px -1px 2px #fff;
	}
`;

export const BorderInside = styled.div`
	padding: 8px;
	border-radius: 50%;
	border: none;
	margin-bottom: 10px;
	box-shadow: inset 2px 2px 4px #9da2b6, inset -5px -5px 8px #fff;

	&:hover,
	&:focus {
		box-shadow: inset 1px 1px 2px #9da2b6, inset -1px -1px 2px #fff;
	}
`;

export const CloseBtn = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	padding: 4px 8px;
	width: 30px;
	height: 30px;
	border: none;
	outline: none;
	border-radius: 50%;
	color: ${props => props.theme.colors.black};
	background-color: transparent;
	box-shadow: ${props => props.theme.shadows.boxShadow};
	transition: all 0.2s ease-in-out;

	&:hover,
	&:focus {
		box-shadow: inset -1px -1px 1px #fff, inset 1px 1px 1px #8e9aaf;

		svg {
			fill: #063a36;
			stroke: #063a36; 
		}
	}

	&:active {
			background-color: ${props => props.theme.colors.white};
			svg {
				fill: #063a36;
				stroke: #fff; 
			}
		}
`;

export const ModalPhoto = styled.img`
	width: 100%;
	height: 100%;
	margin-bottom: 0;
	object-fit: cover;
	object-position: center;
`;

export const PhotoThumb = styled.div`
	margin-bottom: 0;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	overflow: hidden;
`;

export const PhotoConainer = styled.div`
	margin: 0 auto;
	padding: 10px;
	max-width: 100%;
	width: 320px;
	height: 320px;
	border-radius: 50%;
`;

export const PhotoDescr = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 4px;
	width: 100%;
	height: auto;
`;

export const Button = styled.button`
	padding: 4px 8px;
	width: 30px;
	height: 30px;
	border: none;
	outline: none;
	border-radius: 50%;
	color: ${props => props.theme.colors.black};
	background-color: transparent;
	box-shadow: -2px -2px 4px #fff, 3px 3px 5px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease-in-out;

	&:hover,
	&:focus {
		box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);

		svg {
			fill: #063a36;
			stroke: #063a36; 
		}
	}

	&:active {
			background-color: ${props => props.theme.colors.white};
			box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
			svg {
				fill: #063a36;
				stroke: #fff; 
			}
		}
`;