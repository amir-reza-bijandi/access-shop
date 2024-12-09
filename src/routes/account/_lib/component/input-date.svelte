<script lang="ts">
	import type { FocusEventHandler, FormEventHandler } from 'svelte/elements';
	import digitsToEnglish from '../utility/digits-to-english';
	import persianToCalendars from '../utility/persian-to-calendars';

	type InputDateProps = {
		value?: number;
	};
	let { value = $bindable(0) }: InputDateProps = $props();

	const date = new Date(value);

	const intlOptions: Intl.NumberFormatOptions = {
		useGrouping: false
	};

	const whiteList = ['روز', 'ماه', 'سال'];
	let day = $state(value ? date.getDate().toLocaleString('fa-IR', intlOptions) : 'روز');
	let month = $state(value ? date.getMonth().toLocaleString('fa-IR', intlOptions) : 'ماه');
	let year = $state(value ? date.getFullYear().toLocaleString('fa-IR', intlOptions) : 'سال');

	function validate(target: 'day' | 'month' | 'year', value: number) {
		if (!value) return 1;
		if (value < 1) return 1;
		if (value > 31 && target === 'day') return 31;
		if (value > 12 && target === 'month') return 12;
		return value;
	}

	let dateValue = $derived.by(() => {
		const dayValue = validate('day', Number(digitsToEnglish(day)));
		const monthValue = validate('month', Number(digitsToEnglish(month)));
		const yearValue = validate('year', Number(digitsToEnglish(year)));

		try {
			const dateString = persianToCalendars(yearValue, monthValue, dayValue);
			return new Date(dateString).getTime();
		} catch (error) {
			return 0;
		}
	});

	$effect(() => {
		value = dateValue;
	});

	const handleSelectAll: FocusEventHandler<HTMLSpanElement> = (e) => {
		// Select every character inside subinputs
		const selection = window.getSelection();
		const range = document.createRange();
		selection?.removeAllRanges();
		range.selectNodeContents(e.currentTarget);
		selection?.addRange(range);
	};

	const handleBlur: FocusEventHandler<HTMLSpanElement> = (e) => {
		// Remove zero characters
		if (whiteList.every((x) => x !== e.currentTarget.textContent)) {
			let value = String(Number(digitsToEnglish(e.currentTarget.textContent!)));
			const maxLength = Number(e.currentTarget.dataset.length);

			// Check if the value is zero
			if (+value === 0) {
				value = '1';
			}

			// Pad with zeros
			if (value.length < maxLength) {
				e.currentTarget.textContent = Number(value)
					.toLocaleString('fa-IR', intlOptions)
					.padStart(maxLength, '۰');
			} else {
				// Format the value
				e.currentTarget.textContent = Number(value).toLocaleString('fa-IR', intlOptions);
			}
		}
	};

	const handleInput: FormEventHandler<HTMLSpanElement> = (e) => {
		// Check the value for numbers only
		const value = e.currentTarget.textContent!;
		const numberPattern = new RegExp('[0-9۰۱۲۳۴۵۶۷۸۹]*', 'g');
		const matchResult = value.match(numberPattern);
		let textContent = '';
		if (matchResult) {
			textContent = matchResult.reduce((acc, cur) => (cur ? acc + cur : acc));
		}
		e.currentTarget.textContent = textContent;

		// Move focus to the next subinput
		const maxLength = Number(e.currentTarget.dataset.length);
		if (maxLength) {
			if (textContent.length >= maxLength) {
				const nextSubinput = e.currentTarget.nextElementSibling as HTMLSpanElement | null;
				const nextElement = e.currentTarget.parentElement?.parentElement
					?.nextElementSibling as HTMLElement | null;
				if (nextSubinput) {
					nextSubinput.focus();
				} else {
					nextElement?.focus();
				}
			}
		}

		// Check if value is valid
		const max = Number(e.currentTarget.dataset.max);
		if (max) {
			if (+Number(textContent).toLocaleString('en-US', intlOptions) > max) {
				e.currentTarget.textContent = max.toLocaleString('fa-IR', intlOptions);
			}
		}
	};
</script>

<div class="input-date">
	<span
		contenteditable="true"
		data-length="2"
		data-max="31"
		class="subinput day"
		bind:textContent={day}
		onfocus={handleSelectAll}
		oninput={handleInput}
		onblur={handleBlur}
	></span>
	/
	<span
		contenteditable="true"
		data-length="2"
		data-max="12"
		class="subinput month"
		bind:textContent={month}
		onfocus={handleSelectAll}
		oninput={handleInput}
		onblur={handleBlur}
	>
	</span>
	/
	<span
		contenteditable="true"
		inputmode="numeric"
		data-length="4"
		data-max="9999"
		class="subinput year"
		bind:textContent={year}
		onfocus={handleSelectAll}
		oninput={handleInput}
		onblur={handleBlur}
	></span>
</div>

<style>
	.input-date {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 1.6rem;
		height: 4.8rem;
		border: 1px solid var(--stroke);
		border-radius: 0.8rem;
		width: 100%;
	}

	.input-date:focus-within {
		border-color: var(--stroke-focus);
		background: var(--bg-secondary);
	}

	.input-date:focus-within .subinput {
		background: var(--bg-tertiary);
		border-color: var(--stroke);
	}

	.subinput {
		display: inline-block;
		padding: 0.4rem;
		border-radius: 0.4rem;
		border: 1px solid transparent;
		transition-property: background-color, border-color;
		transition-duration: var(--duration);
	}

	.subinput:read-write:focus {
		outline: 0px solid transparent !important;
		border-color: var(--stroke-focus);
		background: var(--accent);
	}

	.subinput::selection {
		background: transparent;
	}
</style>
