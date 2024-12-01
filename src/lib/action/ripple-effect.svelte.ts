import type { Action } from 'svelte/action';

const rippleEffect: Action<HTMLElement> = (node) => {
	node.classList.add('ripple-container');
	function handleClick(e: MouseEvent) {
		const duration = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue('--ripple-duration')
		);
		const ripple = document.createElement('span');
		ripple.classList.add('ripple');
		ripple.style.width = `${node.getBoundingClientRect().width}px`;
		ripple.style.left = `${e.clientX - node.getBoundingClientRect().left}px`;
		ripple.style.top = `${e.clientY - node.getBoundingClientRect().top}px`;
		node.appendChild(ripple);
		setTimeout(() => {
			node.removeChild(ripple);
		}, duration);
	}
	$effect(() => {
		node.addEventListener('click', handleClick);
		return () => node.removeEventListener('click', handleClick);
	});
};

export default rippleEffect;
