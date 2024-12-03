type ModalHeight = 'min' | 'max';

export type AuthContext = {
	setStep: (index: number) => void;
	setError: (error: string | null) => void;
	setSubmit: (isSubmiting: boolean) => void;
	setModalHeight: (height: ModalHeight) => void;
	setPhoneNumber: (phoneNumber: string) => void;
	closeModal: () => void;
	cancel: () => void;
	error: string | null;
	modalHeight: ModalHeight;
	isSubmiting: boolean;
	phoneNumber: string;
};
