import getRandomDate from '$lib/utility/get-random-date';

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

function getRandomId() {
	return Math.floor(Math.random() * 100000000);
}

export const orderList: Order[] = [
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه + ۱۲۰ کردیت',
				en: 'Basic + 120 Credits'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 2000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'pending'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/heygen.svg',
			name: {
				fa: 'هیژن',
				en: 'Heygen'
			},
			type: {
				fa: 'کریتور',
				en: 'Creator'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/canva.svg',
			name: {
				fa: 'کنوا',
				en: 'Canva'
			},
			type: {
				fa: 'پرو',
				en: 'Pro'
			},
			period: {
				fa: 'یک ساله',
				en: '1 Year'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: 0,
		status: 'canceled'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/chatgpt.svg',
			name: {
				fa: 'چت‌ جی‌پی‌تی',
				en: 'ChatGPT'
			},
			type: {
				fa: 'پایه',
				en: 'Basic'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	},
	{
		id: getRandomId(),
		product: {
			iconSrc: '/icon/synthesia.svg',
			name: {
				fa: 'سینتیژا',
				en: 'Synthesia'
			},
			type: {
				fa: 'استارتر',
				en: 'Starter'
			},
			period: {
				fa: 'یک ماهه',
				en: '1 Month'
			},
			userLimit: {
				fa: 'نامحدود',
				en: 'Unlimited'
			}
		},
		price: 1000000,
		submitDate: getRandomDate(),
		deliveryDate: getRandomDate(),
		status: 'delivered'
	}
];
