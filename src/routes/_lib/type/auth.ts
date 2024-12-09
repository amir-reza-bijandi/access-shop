type ModalHeight = 'min' | 'max';

export type AuthInternalContext = {
	setStep: (index: number) => void;
	setError: (error: string | null) => void;
	setSubmit: (isSubmiting: boolean) => void;
	setModalHeight: (height: ModalHeight) => void;
	closeModal: () => void;
	cancel: () => void;
	error: string | null;
	modalHeight: ModalHeight;
	isSubmiting: boolean;
};
