<script lang="ts">
	import Button from '$lib/component/button.svelte';
	import Glow from '$lib/component/glow.svelte';
	import Input from '$lib/component/input.svelte';
	import PageWrapper from '$lib/component/page-wrapper.svelte';
	import { SendHorizonal } from 'lucide-svelte';
</script>

<PageWrapper>
	<div class="content">
		<header class="page-description">
			<div class="icon-box">
				<Glow class="glow" />
				<img class="support-icon" src="/icon/ui/headphone.svg" alt="" />
			</div>
			<h1 class="title">
				تماس با تیم اکسس شاپ
				<span class="subtitle">با ما در ارتباط باشید!</span>
			</h1>
			<p class="body">
				آیا سوالی دارید؟ نیاز به کمک دارید؟ یا می‌خواهید پیشنهاد خود را با ما در میان بگذارید؟ تیم
				پشتیبانی اکسس شاپ آماده پاسخگویی به همه سوالات شما است.
			</p>
		</header>
		<form class="form">
			<Glow class="glow" />
			<div class="box rounded-lg">
				<div class="form-body">
					<label class="label">
						شمارهٔ موبایل
						<Input name="phoneNumber" placeholder="شمارهٔ موبایل خود را وارد کنید..." />
					</label>
					<label class="label">
						نام و نام خانوادگی
						<Input name="fullName" placeholder="نام و نام خانوادگی خود را وارد کنید..." />
					</label>
					<label class="label">
						عنوان پیام
						<Input name="title" placeholder="عنوان پیام را وارد کنید..." />
					</label>
					<label class="label">
						عنوان پیام
						<textarea class="message" name="message" placeholder="هر چه می‌خواهد دل تنگت بگو..."
						></textarea>
					</label>
				</div>
				<div class="form-footer">
					<Button class="submit-btn" icon={SendHorizonal}>ارسال پیام</Button>
					<small class="note"
						>پس از ارسال پیام همکاران ما در اسرع وقت با شما تماس خواهند گرفت.</small
					>
				</div>
			</div>
		</form>
		<footer class="contact-info">
			<h2 class="contact-info-heading">
				اطلاعات تماس
				<span class="contact-info-subheading">همه‌روزه و ۲۴ ساعته پاسخگوی شما هستیم!</span>
			</h2>
			<div class="list-wrapper">
				<Glow class="glow" />
				<ul class="contact-info-list">
					<li class="box contact-info-item">
						<img src="/icon/ui/phone.svg" alt="" />
						<h3 class="info">شمارهٔ تلفن<span class="subinfo">۰۲۱-۳۳۳۲۲۲۱</span></h3>
					</li>
					<li class="box contact-info-item">
						<img src="/icon/ui/location.svg" alt="" />
						<h3 class="info">
							آدرس دفتر<span class="subinfo"
								>مشهد - بلوار هفته تیر - مجتمع تجاری آرمیتاژ - واحد ۱۰۲۴</span
							>
						</h3>
					</li>
					<li class="box contact-info-item">
						<img src="/icon/ui/email.svg" alt="" />
						<h3 class="info">آدرس ایمیل<span class="subinfo">info@accessshop.com</span></h3>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</PageWrapper>

<style>
	.content {
		max-width: 84.2rem;
		margin-inline: auto;
	}

	.page-description {
		display: grid;
		justify-items: center;
		margin-top: 14.8rem;
		margin-bottom: 6.4rem;
	}

	.icon-box {
		position: relative;
		animation: intro-down 1s ease backwards;
	}

	.icon-box :global(.glow) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 51.2rem;
		z-index: -1;
	}

	.support-icon {
		margin-bottom: 3.2rem;
	}

	.title {
		display: grid;
		justify-items: center;
		font-size: 3.6rem;
		font-weight: 800;
		gap: 1.2rem;
		margin-bottom: 3.2rem;
		animation: intro-right 1s ease 100ms backwards;
	}

	.subtitle {
		font-weight: 700;
	}

	.body {
		max-width: 60rem;
		text-align: center;
		line-height: var(--line-height);
		animation: intro-left 1s ease 200ms backwards;
	}

	.form {
		position: relative;
		animation: intro-up 1s ease 300ms backwards;
	}

	.form :global(.glow) {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 102.4rem;
		z-index: -1;
	}

	.form-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 2.4rem;
		gap: 1.6rem;
	}

	.form-footer {
		padding: 2.4rem;
	}

	.label {
		display: grid;
		gap: 1.2rem;
	}

	.label:is(:nth-child(3), :nth-child(4)) {
		grid-column: span 2;
	}

	.message {
		outline: 0;
		border: 1px solid var(--stroke);
		border-radius: 0.8rem;
		color: inherit;
		background: transparent;
		height: 25.6rem;
		padding: 1.6rem;
		resize: vertical;
		transition-property: background-color, border-color;
		transition-duration: var(--duration);
	}

	.message:focus {
		background: var(--bg-secondary);
		border-color: var(--stroke-focus);
	}

	.form-footer {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--stroke);
	}

	.note {
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--accent);
	}

	.contact-info {
		margin-top: 19.6rem;
		margin-bottom: 12.8rem;
	}

	.contact-info-heading {
		display: grid;
		gap: 1.2rem;
		place-items: center;
		font-size: 3.2rem;
		font-weight: 700;
		margin-bottom: 6.4rem;
	}

	.contact-info-subheading {
		font-size: 2rem;
		font-weight: 600;
	}

	.list-wrapper {
		position: relative;
	}

	.list-wrapper :global(.glow) {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 76.8rem;
		z-index: -1;
	}

	.contact-info-list {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 2rem;
		list-style: none;
	}

	.contact-info-item {
		display: grid;
		place-items: center;
		gap: 1.6rem;
		padding: 2.4rem;
	}

	.info {
		display: grid;
		gap: 0.8rem;
		place-items: center;
		font-size: 2rem;
		font-weight: 700;
	}

	.subinfo {
		font-size: 1.6rem;
		font-weight: 600;
	}

	@media (max-width: 56rem) {
		.page-description {
			margin-top: 8rem;
		}

		.contact-info {
			margin-block: 12.8rem;
		}

		.contact-info-list {
			gap: 1.6rem;
			grid-template-columns: 1fr 1fr;
			max-width: 51.2rem;
			margin-inline: auto;
		}

		.contact-info-item:nth-child(2) {
			grid-row: 1 / 2;
			grid-column: span 2;
		}
	}

	@media (max-width: 44rem) {
		.form-footer {
			flex-direction: column;
			gap: 1.6rem;
		}

		.form-footer :global(.submit-btn) {
			width: 100%;
		}

		.contact-info-heading {
			margin-bottom: 4.8rem;
		}

		.page-description {
			margin-bottom: 4.8rem;
		}
	}

	@media (max-width: 40rem) {
		.form-body {
			grid-template-columns: 1fr;
		}

		.label:is(:nth-child(3), :nth-child(4)) {
			grid-column: span 1;
		}

		.contact-info {
			margin-bottom: 0;
		}
	}

	@media (max-width: 36rem) {
		.title {
			font-size: 3.2rem;
		}

		.subtitle {
			font-size: 2.4rem;
		}

		.contact-info-list {
			gap: 1.2rem;
		}

		.note {
			line-height: var(--line-height);
			text-align: center;
		}
	}

	@media (max-width: 32rem) {
		.page-description {
			margin-top: 6.4rem;
			margin-bottom: 3.2rem;
		}

		.support-icon {
			margin-bottom: 2.4rem;
		}

		.title {
			font-size: 2.4rem;
			margin-bottom: 2.4rem;
		}

		.subtitle {
			font-size: 1.6rem;
		}

		.contact-info {
			margin-top: 9.6rem;
			margin-bottom: 0;
		}

		.contact-info-heading {
			margin-bottom: 3.2rem;
		}
	}

	@media (max-width: 28rem) {
		.contact-info-list {
			grid-template-columns: 1fr;
		}

		.contact-info-item:nth-child(2) {
			grid-row: auto;
			grid-column: auto;
		}
	}
</style>
