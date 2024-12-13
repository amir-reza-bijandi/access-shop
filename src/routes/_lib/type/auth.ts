export type AuthInternalContext = {
	setStep: (index: number) => void;
	setError: (error: string | null) => void;
	setSubmit: (isSubmiting: boolean) => void;
	closeModal: () => void;
	reset: () => void;
	error: string | null;
	isSubmiting: boolean;
	contentHeight: number;
};
