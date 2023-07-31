import { useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { Tooltip } from "@chakra-ui/react";
import { TfiPencil } from "react-icons/tfi";
import { EditContactModal } from "components/EditContactModal/EditContactModal";
import {
	BorderOutside,
	BorderInside,
	CloseBtn,
	ModalPhoto,
	PhotoThumb,
	PhotoConainer,
	PhotoDescr,
	Button,
} from "./Modal.styled";
import { customStylesModal } from "../../styles/modalStyles";
import Ava  from "../../images/icon_userAvatar.png";

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openEditModal = () => {
		setModalIsOpen(true);
	};

	const closeEditModal = () => {
		setModalIsOpen(false);
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Inline Styles Modal Example"
			style={customStylesModal}
		>
			<CloseBtn onClick={onClose}>
				<MdOutlineClose />
			</CloseBtn>
			<PhotoConainer>
				<BorderOutside>
					<BorderInside>
						<PhotoThumb>
							<ModalPhoto src={Ava} alt="user" width="260" />
						</PhotoThumb>
					</BorderInside>
				</BorderOutside>
			</PhotoConainer>
			<PhotoDescr>
				<p>{data?.name}</p>
				<Tooltip label="Call" hasArrow bg="green.300" color="#000" fontSize="xs">
					<p>
						<a href={'tel:' + data?.phone}>{data?.number}</a>
					</p>
				</Tooltip>
			</PhotoDescr>
			<Button onClick={openEditModal}>
				<TfiPencil size="16" />
			</Button>
			<EditContactModal
				isOpen={modalIsOpen}
				onClose={closeEditModal}
				data={data}
				setModalIsOpen={setModalIsOpen}
			/>
		</Modal>
	);
};