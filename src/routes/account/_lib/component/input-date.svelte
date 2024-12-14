<script lang="ts">
	/* --------------------------------- Imports -------------------------------- */
	import type { FocusEventHandler, FormEventHandler } from 'svelte/elements';
	import digitsToEnglish from '../utility/digits-to-english';
	import persianToCalendars from '../utility/persian-to-calendars';
	import type { BirthDate } from '$lib/data/user-info';

	/* ---------------------------------- Props --------------------------------- */
	type InputDateProps = {
		value?: BirthDate | null;
		oninput?: () => void;
	};
	let {
		value = $bindable({
			day: 1,
			month: 1,
			year: 1
		}),
		oninput
	}: InputDateProps = $props();

	/* -------------------------------- Constants ------------------------------- */
	const INTL_OPTIONS: Intl.NumberFormatOptions = {
		useGrouping: false
	};
	const VALUE_WHITE_LIST = ['روز', 'ماه', 'سال'];

	/* ---------------------------------- State --------------------------------- */
	let day = $state(
		value ? value.day.toLocaleString('fa-IR', INTL_OPTIONS).padStart(2, '۰') : 'روز'
	);
	let month = $state(
		value ? value.month.toLocaleString('fa-IR', INTL_OPTIONS).padStart(2, '۰') : 'ماه'
	);
	let year = $state(
		value ? value.year.toLocaleString('fa-IR', INTL_OPTIONS).padStart(2, '۰') : 'سال'
	);

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
			return {
				day: dayValue,
				month: monthValue,
				year: yearValue
			};
		} catch (error) {
			return null;
		}
	});

	/* --------------------------------- Effect --------------------------------- */
	$effect(() => {
		value = dateValue;
	});

	/* --------------------------------- Events --------------------------------- */
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
		if (VALUE_WHITE_LIST.every((x) => x !== e.currentTarget.textContent)) {
			let value = String(Number(digitsToEnglish(e.currentTarget.textContent!)));
			const maxLength = Number(e.currentTarget.dataset.length);

			// Check if the value is zero
			if (+value === 0) {
				value = '1';
			}

			// Pad with zeros
			if (value.length < maxLength) {
				e.currentTarget.textContent = Number(value)
					.toLocaleString('fa-IR', INTL_OPTIONS)
					.padStart(maxLength, '۰');
			} else {
				// Format the value
				e.currentTarget.textContent = Number(value).toLocaleString('fa-IR', INTL_OPTIONS);
			}
		}
	};

	const handleInput: FormEventHandler<HTMLSpanElement> = (e) => {
		oninput?.();

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
			if (+Number(textContent).toLocaleString('en-US', INTL_OPTIONS) > max) {
				e.currentTarget.textContent = max.toLocaleString('fa-IR', INTL_OPTIONS);
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
