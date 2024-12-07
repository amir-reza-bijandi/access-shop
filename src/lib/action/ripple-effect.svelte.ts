import type { Action } from 'svelte/action';

type Params = {
	// Ripple position is based on the current mouse position
	dynamicPositon?: boolean;
	sizeMultiplier?: number;
};

const rippleEffect: Action<HTMLElement, Params | undefined> = (node, params) => {
	function createRipple(clientX?: number, clientY?: number) {
		const { dynamicPositon = true, sizeMultiplier = 1 } = params || {};
		node.classList.add('ripple-container');
		const nodeRect = node.getBoundingClientRect();

		const duration = parseInt(getComputedStyle(node).getPropertyValue('--ripple-duration'));
		const ripple = document.createElement('span');
		ripple.classList.add('ripple');
		ripple.style.width = `${nodeRect.width * sizeMultiplier}px`;

		if (dynamicPositon && clientX && clientY) {
			ripple.style.left = `${clientX - nodeRect.left}px`;
			ripple.style.top = `${clientY - nodeRect.top}px`;
		} else {
			ripple.style.left = `${nodeRect.width / 2}px`;
			ripple.style.top = `${nodeRect.height / 2}px`;
		}

		node.appendChild(ripple);
		setTimeout(() => {
			node.removeChild(ripple);
		}, duration);
	}

	function handleClick({ clientX, clientY, button }: MouseEvent) {
		if (button === 0) {
			createRipple(clientX, clientY);
		}
	}

	function handleKeyDown({ key }: KeyboardEvent) {
		if (key === ' ' || key === 'Enter') {
			createRipple();
		}
	}
	$effect(() => {
		node.addEventListener('mousedown', handleClick);
		node.addEventListener('keydown', handleKeyDown);
		return () => {
			node.removeEventListener('mousedown', handleClick);
			node.removeEventListener('keydown', handleKeyDown);
		};
	});
};

export default rippleEffect;
