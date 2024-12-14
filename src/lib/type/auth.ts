export type AuthExternalContext = {
	startCodeTimer: () => void;
	resetCodeTimer: () => void;
	setPhoneNumber: (phoneNumber: string) => void;
	operation: 'auth' | 'change-phone-number';
	isAuthActive: boolean;
	currentStep: number;
	currentPhoneNumber: string;
	previousPhoneNumber: string;
	codeTimer: number;
};
