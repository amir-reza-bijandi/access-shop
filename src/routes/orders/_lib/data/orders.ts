type Lang = {
	fa: string;
	en: string;
};

type Product = {
	iconSrc: string;
	name: Lang;
	type: Lang;
	period: Lang;
	userLimit: Lang;
};

export type Order = {
	id: number;
	product: Product;
	price: number;
	submitDate: number;
	deliveryDate: number;
	status: 'pending' | 'delivered' | 'canceled';
};

export const orderList: Order[] = [
	{
		id: 40965369,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه + ۱۲۰ کردیت', en: 'Basic + 120 Credits' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 2000000,
		submitDate: 1732195521178.0957,
		deliveryDate: 0,
		status: 'pending'
	},
	{
		id: 81763249,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732361522114.7893,
		deliveryDate: 1731774273371.2507,
		status: 'delivered'
	},
	{
		id: 51916694,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732419218400.573,
		deliveryDate: 1731962540925.8804,
		status: 'delivered'
	},
	{
		id: 91879433,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732616866457.0369,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 63822318,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732506897349.0745,
		deliveryDate: 1732002751662.7466,
		status: 'delivered'
	},
	{
		id: 71111071,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731864693889.0713,
		deliveryDate: 1732635931106.5833,
		status: 'delivered'
	},
	{
		id: 744885,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732045137980.2407,
		deliveryDate: 1731651996444.151,
		status: 'delivered'
	},
	{
		id: 81691515,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732586831886.812,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 20839965,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732145235492.0427,
		deliveryDate: 1732402137917.1763,
		status: 'delivered'
	},
	{
		id: 50090772,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732386955920.1636,
		deliveryDate: 1731947560224.2795,
		status: 'delivered'
	},
	{
		id: 36661942,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731640030591.3008,
		deliveryDate: 1731661839310.5615,
		status: 'delivered'
	},
	{
		id: 36083025,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732109317280.0146,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 74685461,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731993426143.8765,
		deliveryDate: 1732307451243.1177,
		status: 'delivered'
	},
	{
		id: 54356775,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731960673711.8953,
		deliveryDate: 1732448790735.887,
		status: 'delivered'
	},
	{
		id: 83533679,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732205056069.4932,
		deliveryDate: 1732114457289.2217,
		status: 'delivered'
	},
	{
		id: 71591841,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732422897977.143,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 15179338,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731707393850.8052,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 54679980,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732635300763.5388,
		deliveryDate: 1732405602980.1143,
		status: 'delivered'
	},
	{
		id: 50834869,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732277193918.8472,
		deliveryDate: 1732347564218.5566,
		status: 'delivered'
	},
	{
		id: 19051994,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732364262756.8071,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 49336542,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732320416022.8447,
		deliveryDate: 1732635450045.616,
		status: 'delivered'
	},
	{
		id: 75643039,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731932738876.159,
		deliveryDate: 1731736573487.4297,
		status: 'delivered'
	},
	{
		id: 75744367,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731911621858.12,
		deliveryDate: 1732605822875.6067,
		status: 'delivered'
	},
	{
		id: 35201864,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732567357994.501,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 28044059,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731664508079.6492,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 49910998,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731679051526.5332,
		deliveryDate: 1732222082812.536,
		status: 'delivered'
	},
	{
		id: 30906870,
		product: {
			iconSrc: '/icon/heygen.svg',
			name: { fa: 'هیژن', en: 'Heygen' },
			type: { fa: 'کریتور', en: 'Creator' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732322095497.672,
		deliveryDate: 1731710589433.664,
		status: 'delivered'
	},
	{
		id: 16447300,
		product: {
			iconSrc: '/icon/canva.svg',
			name: { fa: 'کنوا', en: 'Canva' },
			type: { fa: 'پرو', en: 'Pro' },
			period: { fa: 'یک ساله', en: '1 Year' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1732116438804.245,
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: 79217830,
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: { fa: 'چت‌ جی‌پی‌تی', en: 'ChatGPT' },
			type: { fa: 'پایه', en: 'Basic' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731732030468.189,
		deliveryDate: 1731689495995.5725,
		status: 'delivered'
	},
	{
		id: 18755613,
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: { fa: 'سینتیژا', en: 'Synthesia' },
			type: { fa: 'استارتر', en: 'Starter' },
			period: { fa: 'یک ماهه', en: '1 Month' },
			userLimit: { fa: 'نامحدود', en: 'Unlimited' }
		},
		price: 1000000,
		submitDate: 1731752338671.1174,
		deliveryDate: 1732042357464.8848,
		status: 'delivered'
	}
];
