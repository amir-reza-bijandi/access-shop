export default function handleViewChange({
	inView,
	node,
	scrollDirection: { vertical }
}: ObserverEventDetails) {
	if (inView) {
		node.classList.add('in-view');
		node.classList.remove('not-in-view-down');
		node.classList.remove('not-in-view-up');
	} else {
		node.classList.add('not-in-view-' + vertical);
		node.classList.remove('in-view');
	}
}
