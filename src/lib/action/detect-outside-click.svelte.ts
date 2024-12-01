import type { Action } from 'svelte/action';

type Params = {
	extraNodeList?: Node[];
	callback: () => void;
};
export const detectOutsideClick: Action<HTMLElement, Params> = (
	node,
	{ callback, extraNodeList }
) => {
	$effect(() => {
		function handleClick(e: MouseEvent) {
			if (
				!node.contains(e.target as Node) &&
				!extraNodeList?.some((node) => node.contains(e.target as Node))
			) {
				callback();
			}
		}
		window.addEventListener('click', handleClick);

		return () => window.removeEventListener('click', handleClick);
	});
};

export default detectOutsideClick;
