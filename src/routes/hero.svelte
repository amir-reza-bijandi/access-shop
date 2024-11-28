<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import HeroCards from './hero-cards.svelte';
	import { ArrowDown } from 'lucide-svelte';
</script>

<section class="hero">
	<div>
		<h1 class="title">دسترسی به دنیای هوش مصنوعی</h1>
		<span class="subtitle">تنها با یک کلیک...</span>
		<p class="description">
			با پلتفرم ما، دنیای بی‌کران هوش مصنوعی را کشف کنید. از مدل‌های پیشرفته زبان طبیعی تا ابزارهای
			قدرتمند یادگیری ماشین، همه آنچه برای نوآوری نیاز دارید، در یک جا جمع شده است. بدون نیاز به
			دانش فنی، به سادگی به ابزارهای هوش مصنوعی دسترسی پیدا کنید و ایده‌های خود را به واقعیت تبدیل
			کنید. با ما، هوش مصنوعی را دم‌دست خود داشته باشید.
		</p>
		<Button as="a" href="#products" variant="fill" icon={ArrowDown}>مشاهدهٔ محصولات</Button>
	</div>
	<HeroCards />
</section>

<style>
	.hero {
		display: flex;
		margin-block: 19.2rem;
	}

	.hero :global(> *) {
		flex: 1;
	}

	.title {
		font-size: 3.6rem;
		font-weight: 800;
		margin-bottom: 1.2rem;
	}

	.subtitle {
		display: block;
		font-size: 2.4rem;
		font-weight: 700;
		margin-bottom: 2.4rem;
	}

	.description {
		line-height: var(--line-height);
		margin-bottom: 3.2rem;
	}
</style>
