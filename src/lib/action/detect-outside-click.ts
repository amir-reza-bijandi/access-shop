import type { Action } from 'svelte/action';

type Callback = () => void;
export const detectOutsideClick: Action<HTMLElement, Callback> = (node, callback) => {
	window.addEventListener('click', (e) => {
		if (!node.contains(e.target as Node)) {
			callback();
		}
	});
};

export default detectOutsideClick;
