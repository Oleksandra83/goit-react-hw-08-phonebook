import { useState } from "react";
import { Formik } from "formik";
import 'yup-phone';
import { BsPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';
import { schema } from 'shared/schemaYup';
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeContact } from "redux/contacts/contactsOperations";
import {
	Form,
	FormField,
	FieldInput,
	ErrorMessage,
	FormButton,
	LabelForm,
	LabelSpan,
} from "./EditContactModal.styled";
import { CloseBtn } from "../Modal/Modal.styled";
import { customStylesInsideModal } from "../../styles/modalStyles";

Modal.setAppElement('#root');

export const EditContactModal = ({
	isOpen,
	data,
	onClose,
	setModalIsopen,
}) => {
	const [formValues, setFormValues] = useState(data || {});
	const initialValues = { name: '', number: '' };
	const saveValues = {
		name: data?.name || '',
		number: data?.number || '',
	};

	const dispatch = useDispatch();
	const closeModal = () => {
		onClose();
		setModalIsopen(false);
	};

	const onHandleSubmit = (values, { resetForm }) => {
		const newFormValues = { ...formValues, ...values };
		setFormValues(newFormValues);
		dispatch(changeContact(newFormValues));
		resetForm();
		closeModal();
	};

		return (
			<>
				<Modal
					isOpen={isOpen}
					onRequestClose={closeModal}
					contentLabel="Inline Styles Modal Example"
					style={customStylesInsideModal}
				>
					<CloseBtn onClick={onClose}>
						<MdOutlineClose />
					</CloseBtn>
					<Formik
						initialValues={saveValues || initialValues}
						onSubmit={onHandleSubmit}
						enableReinitialize
						validationSchema={schema}
					>
						{formik => {
							return (
								<Form autoComplete="off">
									<FormField>
										<LabelForm>
											< BsPersonFill />
											<LabelSpan>Name</LabelSpan>
										</LabelForm>
										<FieldInput
											type="text"
											name="name"
											placeholder="Your name" />
										<ErrorMessage name="name" component="span" />
									</FormField>
									<FormField>
										<LabelForm>
											< BsFillTelephoneFill />
											<LabelSpan>Phone Number</LabelSpan>
										</LabelForm>
										<FieldInput
											type="tel"
											name="number"
											placeholder="+38(096)000-00-00" />
										<ErrorMessage name="number" component="span" />
									</FormField>
									<FormButton
										type="sumbmit"
										disabled={!formik.isValid || formik.isSubmitting}
									>
										<IoMdPersonAdd size="16" />
										Edit contact
									</FormButton>
								</Form>
							);
						}}
					</Formik>
				</Modal>
			</>
		)
	}