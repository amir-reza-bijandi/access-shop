import type { Action } from 'svelte/action';

type Callback = () => void;
export const detectOutsideClick: Action<HTMLElement, Callback> = (node, callback) => {
	$effect(() => {
		function handleClick(e: MouseEvent) {
			if (!node.contains(e.target as Node)) {
				callback();
			}
		}
		window.addEventListener('click', handleClick);

		return () => window.removeEventListener('click', handleClick);
	});
};

export default detectOutsideClick;
