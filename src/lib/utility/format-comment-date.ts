export default function formatCommentDate(dateInMilliseconds: number) {
	const date = new Date(dateInMilliseconds);
	const weekday = Intl.DateTimeFormat('fa-IR', { weekday: 'long' }).format(date);
	const formattedDate = new Intl.DateTimeFormat('fa-IR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	}).format(date);
	return `${formattedDate} - ${weekday}`;
}
