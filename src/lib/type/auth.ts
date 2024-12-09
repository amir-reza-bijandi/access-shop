export type AuthExternalContext = {
	operation: 'auth' | 'change-phone-number';
	isAuthActive: boolean;
	currentStep: number;
	phoneNumber: string;
};
