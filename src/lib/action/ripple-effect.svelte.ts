import type { Action } from 'svelte/action';

type Params = {
	// Ripple position is based on the current mouse position
	dynamicPositon?: boolean;
};

const rippleEffect: Action<HTMLElement, Params | undefined> = (node, params) => {
	function handleClick(e: MouseEvent) {
		if (e.button === 0) {
			const { dynamicPositon = true } = params || {};
			node.classList.add('ripple-container');
			const nodeRect = node.getBoundingClientRect();

			const duration = parseInt(getComputedStyle(node).getPropertyValue('--ripple-duration'));
			const ripple = document.createElement('span');
			ripple.classList.add('ripple');
			ripple.style.width = `${nodeRect.width}px`;

			if (dynamicPositon) {
				ripple.style.left = `${e.clientX - nodeRect.left}px`;
				ripple.style.top = `${e.clientY - nodeRect.top}px`;
			} else {
				ripple.style.left = `${nodeRect.width / 2}px`;
				ripple.style.top = `${nodeRect.height / 2}px`;
			}

			node.appendChild(ripple);
			setTimeout(() => {
				node.removeChild(ripple);
			}, duration);
		}
	}
	$effect(() => {
		node.addEventListener('mousedown', handleClick);
		return () => node.removeEventListener('mousedown', handleClick);
	});
};

export default rippleEffect;
