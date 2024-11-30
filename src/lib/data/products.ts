export type Product = {
	id: number;
	nameEn: string;
	nameFa: string;
	description: string;
	imageSrc: string;
	startingPrice: number;
	deliveryTime: [number, number];
};

export const productList: Product[] = [
	{
		id: 1,
		nameEn: 'Synthesia',
		nameFa: 'سینتژیا',
		description:
			'سینیتژیا ابزاری قدرتمند مبتنی بر هوش مصنوعی است که به شما امکان می‌دهد ویدیوهای حرفه‌ای با استفاده از آواتارهای واقع‌گرا تولید کنید. تنها کافی است متن خود را وارد کنید و سینیتژیا آن را به یک ویدیوی متحرک با صدای طبیعی تبدیل می‌کند.',
		imageSrc: '/icon/synthesia.svg',
		startingPrice: 1_000_000,
		deliveryTime: [15, 30]
	},
	{
		id: 2,
		nameEn: 'ChatGPT',
		nameFa: 'چت‌جی‌پی‌تی',
		description:
			'چت جی‌پی‌تی یک مدل زبانی بزرگ است که می‌تواند متن‌های مختلفی از جمله پاسخ به سوالات، تولید خلاقانه و ترجمه را انجام دهد. این مدل با استفاده از حجم عظیمی از داده‌ها آموزش دیده است تا بتواند گفت‌وگوهایی شبیه به انسان انجام دهد.',
		imageSrc: '/icon/chatgpt.svg',
		startingPrice: 100_000,
		deliveryTime: [15, 30]
	},
	{
		id: 3,
		nameEn: 'Cluade',
		nameFa: 'کلاد',
		description:
			'کلاد یک مدل زبانی بزرگ و پیشرفته است که توانایی انجام طیف گسترده‌ای از وظایف را دارد. این مدل می‌تواند به سوالات شما پاسخ دهد، متن‌های خلاقانه تولید کند، کد بنویسد و حتی به تصاویر پاسخ دهد.',
		imageSrc: '/icon/claude.svg',
		startingPrice: 2_000_000,
		deliveryTime: [15, 30]
	},
	{
		id: 4,
		nameEn: 'HeyGen',
		nameFa: 'هی‌جن',
		description:
			'هیجن ای آی یک ابزار قدرتمند مبتنی بر هوش مصنوعی است که به شما امکان می‌دهد ویدیوهای حرفه‌ای با کیفیت بالا را تنها با چند کلیک ایجاد کنید. با استفاده از این ابزار، می‌توانید متن‌های خود را به ویدیوهای متحرک با آواتارهای واقع‌گرا تبدیل کرده و به سرعت محتوای بصری جذابی تولید کنید.',
		imageSrc: '/icon/heygen.svg',
		startingPrice: 1_500_000,
		deliveryTime: [15, 30]
	},
	{
		id: 5,
		nameEn: 'Jasper',
		nameFa: 'جاسپر',
		description:
			'جاسپر یک دستیار نوشتن پیشرفته است که با استفاده از هوش مصنوعی به شما کمک می‌کند تا متن‌های باکیفیت و خلاقانه‌ای برای بازاریابی، محتوا و سایر کارهای نوشتاری تولید کنید.',
		imageSrc: '/icon/jasper.svg',
		startingPrice: 3_000_000,
		deliveryTime: [15, 30]
	},
	{
		id: 6,
		nameEn: 'Writesonic',
		nameFa: 'رایت‌سونیک',
		description:
			'رایت‌سونیک AI یک دستیار هوشمند برای تولید محتوا است که با استفاده از هوش مصنوعی به شما کمک می‌کند تا متن‌های باکیفیت و متنوعی برای وب‌سایت‌ها، شبکه‌های اجتماعی و سایر پلتفرم‌ها تولید کنید.',
		imageSrc: '/icon/writesonic.svg',
		startingPrice: 500_000,
		deliveryTime: [15, 30]
	}
];
