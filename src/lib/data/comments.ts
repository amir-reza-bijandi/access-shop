export type Comment = {
	id: string;
	name: string;
	date: number;
	text: string;
	avatarSrc: string;
	iconSrc: string;
};

export const commentList: Comment[] = [
	{
		id: crypto.randomUUID(),
		date: Date.now() - (1000000000 + Math.random() * 1000000000),
		name: 'امیررضا بیجندی',
		text: 'از وقتی که از خدمات هوش مصنوعی این شرکت استفاده می‌کنم، کارایی تیم فروش ما به شدت افزایش پیدا کرده. پیش‌بینی مشتریان جدید و شخصی‌سازی پیشنهاداتمون خیلی دقیق‌تر شده و در نتیجه، میزان فروشمون هم...',
		avatarSrc: '/image/avatar/1.png',
		iconSrc: '/icon/chatgpt.svg'
	},
	{
		id: crypto.randomUUID(),
		date: Date.now() - (1000000000 + Math.random() * 1000000000),
		name: 'مرتضی زمانی',
		text: 'با کمک این ابزار، توانستیم پیش‌بینی دقیق‌تری از تقاضا برای مدل‌های مختلف خودروهامون داشته باشیم و در نتیجه، تولید رو بهینه کنیم.',
		avatarSrc: '/image/avatar/2.png',
		iconSrc: '/icon/heygen.svg'
	},
	{
		id: crypto.randomUUID(),
		date: Date.now() - (1000000000 + Math.random() * 1000000000),
		name: 'حسین قاسمی',
		text: 'این ابزار هوش مصنوعی، به ما کمک کرده تا کمپین‌های تبلیغاتی هدفمندتری رو طراحی کنیم و بازدهی سرمایه‌گذاری‌مون رو افزایش بدیم. تحلیل احساسات مشتریان هم خیلی بهمون کمک کرده.',
		avatarSrc: '/image/avatar/3.png',
		iconSrc: '/icon/synthesia.svg'
	},
	{
		id: crypto.randomUUID(),
		date: Date.now() - (1000000000 + Math.random() * 1000000000),
		name: 'محمدرضا احمدی',
		text: 'ما از این فناوری برای هوشمندسازی کتابخانه دانشگاهمون استفاده کردیم. سیستم پیشنهاد کتاب خیلی دقیق عمل می‌کنه و رضایت دانشجوها رو به شدت افزایش داده.',
		avatarSrc: '/image/avatar/4.png',
		iconSrc: '/icon/writesonic.svg'
	},
	{
		id: crypto.randomUUID(),
		date: Date.now() - (1000000000 + Math.random() * 1000000000),
		name: 'مهدی کریمی',
		text: 'با استفاده از هوش مصنوعی این شرکت، توانستیم فرآیند تولیدمون رو بهینه کنیم و هزینه‌هامون رو به شدت کاهش بدیم. پیش‌بینی تقاضا و مدیریت زنجیره تأمین خیلی دقیق‌تر شده.',
		avatarSrc: '/image/avatar/5.png',
		iconSrc: '/icon/jasper.svg'
	},
	{
		id: crypto.randomUUID(),
		date: Date.now() - (1000000000 + Math.random() * 1000000000),
		name: 'علی‌اکبر حسینی',
		text: 'به عنوان یک برنامه‌نویس، این ابزار خیلی به من کمک کرده تا کدهای با کیفیت‌تری بنویسم و زمان توسعه نرم‌افزارها رو کاهش بدم.',
		avatarSrc: '/image/avatar/6.png',
		iconSrc: '/icon/claude.svg'
	}
];