export type BirthDate = {
	year: number;
	month: number;
	day: number;
};

export type UserInfo = {
	fullName: string;
	avatarSrc: string;
	birthDate: BirthDate;
	citizenId: number;
	phoneNumber: number;
};

export const userInfo: UserInfo = {
	fullName: 'امیررضا بیجندی',
	avatarSrc: '/image/avatar/1.png',
	birthDate: {
		year: 1378,
		month: 6,
		day: 14
	},
	citizenId: 9123456789,
	phoneNumber: 9123456789
};
