import { type Comment, commentList } from '$lib/data/comments';

type Name = {
	nameFa: string;
	nameEn: string;
};

type BasePlan = Name & {
	id: number;
	price: number;
};

export type Description = {
	title: string;
	body: string | string[];
};

export type PlanType = BasePlan & {
	description: string;
};

export type PlanPeriod = BasePlan & {
	typeId: number;
};

export type PlanUserLimit = BasePlan & {
	periodId: number;
};

export type Plan = {
	typeList: PlanType[];
	periodList: PlanPeriod[];
	userLimitList: PlanUserLimit[];
};

export type SingleProduct = {
	accountType: 'voucher' | 'email' | 'phone';
	slogan: string;
	nameFa: string;
	nameEn: string;
	imageSrc: string;
	shortDescription: string;
	fullDescription: Description[];
	plan: Plan;
	discount: number;
	accountFee: number;
	fastDeliveryFee: number;
	commentList: Comment[];
};

export const singleProduct: SingleProduct = {
	accountType: 'email',
	nameFa: 'سینتژیا',
	nameEn: 'Synthesia',
	slogan: 'انقلاب هوش مصنوعی در تولید محتوا',
	imageSrc: '/icon/synthesia.svg',
	shortDescription:
		'سینتژیا یک ابزار هوش مصنوعی قدرتمند است که به شما اجازه می‌دهد ویدیوهای حرفه‌ای با کیفیت بالا را به سادگی تولید کنید. کافیست متن خود را وارد کنید، یک آواتار مناسب انتخاب کنید و سینتژیا بقیه کارها را برای شما انجام می‌دهد. این ابزار در حوزه‌های مختلفی مانند آموزش، بازاریابی و خدمات مشتری کاربرد دارد و می‌تواند به شما کمک کند تا محتوای ویدیویی جذاب و مؤثری تولید کنید. با سینتژیا می‌توانید در زمان و هزینه خود صرفه‌جویی کرده و به راحتی به مخاطبان خود دسترسی پیدا کنید.',
	fullDescription: [
		{
			title: 'سینتژیا چگونه کار می‌کند؟',
			body: 'شما متن مورد نظر خود را برای ویدیو وارد می‌کنید. این متن می‌تواند شامل هر چیزی از یک اسکریپت کامل تا یک جمله کوتاه باشد. از بین صدها آواتار واقع‌گرایانه و متنوع، آواتار مناسب برای ویدیوی خود را انتخاب می‌کنید. زبان و صدای آواتار را متناسب با مخاطب خود انتخاب می‌کنید. سینتژیا از طیف وسیعی از زبان‌ها و لهجه‌ها پشتیبانی می‌کند. پس از انجام تنظیمات، سینتژیا به طور خودکار ویدیو را تولید می‌کند. آواتار انتخاب شده به طور طبیعی و روان متن شما را بیان می‌کند.'
		},
		{
			title: 'مزایای استفاده از سینتژیا',
			body: [
				'سرعت و سهولت: تولید ویدیو با سینتژیا بسیار سریع‌تر و آسان‌تر از روش‌های سنتی است.',
				'کیفیت بالا: ویدیوهای تولید شده توسط سینتژیا دارای کیفیت بسیار بالا و حرفه‌ای هستند.',
				'تنوع: می‌توانید ویدیوهای خود را با استفاده از آواتارها و زبان‌های مختلف شخصی‌سازی کنید.',
				'هزینه کمتر: در مقایسه با تولید ویدیو به روش سنتی، استفاده از سینتژیا هزینه بسیار کمتری دارد.',
				'کاربردهای متنوع: سینتژیا در حوزه‌های مختلفی مانند آموزش، بازاریابی، خدمات مشتری و تولید محتوا قابل استفاده است.'
			]
		}
	],
	commentList,
	plan: {
		typeList: [
			{
				id: 1,
				nameFa: 'استارتر',
				nameEn: 'Starter',
				description:
					'اشتراک معمولی سینتژیا یا همان Starter، یک نقطه شروع عالی برای افرادی است که می‌خواهند با این ابزار قدرتمند آشنا شوند و تجربه تولید ویدیوهای هوش مصنوعی را داشته باشند. این اشتراک، امکانات اولیه و ضروری برای ساخت ویدیوهای کوتاه و ساده را در اختیار شما قرار می‌دهد.',
				price: 500_000
			},
			{
				id: 2,
				nameFa: 'کریتور',
				nameEn: 'Creator',
				description:
					'اشتراک حرفه‌ای یا همان Creator سینتزیا به کاربران امکان می‌دهد تا با استفاده از هوش مصنوعی پیشرفته، ویدیوهای حرفه‌ای و جذاب را به سادگی تولید کنند. این پلتفرم با ارائه طیف گسترده‌ای از آواتارهای واقع‌گرا و قابلیت تبدیل متن به ویدیو با کیفیت بالا، فرآیند تولید محتوا را متحول کرده است. کاربران می‌توانند با شخصی‌سازی کامل ویدیوها، از جمله انتخاب زبان، پس‌زمینه و صدا، محتوای منحصر به فردی را ایجاد کنند.',
				price: 1_000_000
			}
		],
		periodList: [
			{
				id: 1,
				typeId: 1,
				nameFa: 'ماهانه',
				nameEn: 'Monthly',
				price: 500_000
			},
			{
				id: 2,
				typeId: 1,
				nameFa: 'سالانه',
				nameEn: 'Annually',
				price: 5_500_000
			},
			{
				id: 3,
				typeId: 2,
				nameFa: 'ماهانه',
				nameEn: 'Monthly',
				price: 1_000_000
			},
			{
				id: 4,
				typeId: 2,
				nameFa: 'سالانه',
				nameEn: 'Annually',
				price: 10_000_000
			}
		],
		userLimitList: [
			{
				id: 1,
				periodId: 0,
				nameFa: 'نامحدود',
				nameEn: 'Unlimited',
				price: 0
			}
		]
	},
	accountFee: 200_000,
	fastDeliveryFee: 100_000,
	discount: 10
};
