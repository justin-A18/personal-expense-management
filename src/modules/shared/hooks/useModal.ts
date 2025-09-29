import { useState } from "react";

export const useModal = () => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal((prev) => !prev);
	};

	return {
		modal,
		toggleModal
	};
};