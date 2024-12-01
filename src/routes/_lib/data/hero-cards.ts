export type CardInfo = {
	imageSrc: string;
	titleEn: string;
	titleFa: string;
	size: 'small' | 'large';
};

export const cardInfoList: CardInfo[] = [
	{
		imageSrc: '/icon/claude.svg',
		titleEn: 'Cluade',
		titleFa: 'کلاد',
		size: 'small'
	},
	{
		imageSrc: '/icon/chatgpt.svg',
		titleEn: 'ChatGPT',
		titleFa: 'چت‌جی‌پی‌تی',
		size: 'large'
	},
	{
		imageSrc: '/icon/heygen.svg',
		titleEn: 'HeyGen',
		titleFa: 'هی‌جن',
		size: 'small'
	}
];
