export default function formatOrderDate(dateInMilliseconds: number) {
	const date = new Date(dateInMilliseconds);
	const formattedDate = new Intl.DateTimeFormat('fa-IR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	}).format(date);
	const formattedTime = new Intl.DateTimeFormat('fa-IR', {
		hour: '2-digit',
		minute: '2-digit'
	}).format(date);
	return `${formattedTime} - ${formattedDate}`;
}
