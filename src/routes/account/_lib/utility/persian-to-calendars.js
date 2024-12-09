/*********************************************************************
 * @function  : persianToCalendars(year, month, day, [options])
 *
 * @purpose   : Converts Persian/Iranian Date (Jalali Date) to the corresponding Gregorian Date.
 *              Handles Persian dates from -272,442 AP to +275,139 AP.
 *              Uses the 'JS Calendar Conversion by Target Approximation' Method.
 *              No external libraries or complex mathematical/astronautical formulas.
 *
 * @version   : 1.00
 * @author    : Mohsen Alyafei
 * @date      : 17 Feb 2022
 * @licence   : MIT
 * @param     : year  : (numeric) Persian year  (-272442 to 275139)
 * @param     : month : (numeric) Persian month (1 to 12) note: months is standard 1 based
 * @param     : day   : (numeric) Persian day   (1 to 31)
 * @param     : options: Object with the following optional parameters:
 *
 *              'toCal' : Specifies the the type of output Calendar to convert to with 18 Calendars:
 *                        - "gregory" : (default)
 *                        - "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic",
 *                          "hebrew", "indian", "islamic", "islamic-umalqura", "islamic-tbla",
 *                          "islamic-civil", "islamic-rgsa", "iso8601", "japanese", "persian", "roc".
 *
 *               'dateStyle' Same as used in the Intl.DateTimeFormat() constructor.
 *                           If not stated, default output is in Gregorian ISO Format: YYYY:MM:DDTHH:mm:ss.sssZ
 *
 *               'locale' The BCP 47 language tag for formatting (default is 'en'). If the 'locale'
 *                        is given then no date conversion happens and the Persian date is formatted
 *                        based on the specified 'dateStyle' and 'locale'.
 *
 *               Other options: As used in the Intl.DateTimeFormat() constructor.
 *
 * @returns   : Return the date in the calendar and format of the specified 'options'
 **********************************************************************/

//==========================================================
export default function persianToCalendars(year, month, day, op = {}) {
	const formatOut = (gD) =>
			'toCal' in op
				? ((op.calendar = op.toCal), new Intl.DateTimeFormat(op.locale ?? 'en', op).format(gD))
				: gD,
		dFormat = new Intl.DateTimeFormat('en-u-ca-persian', { dateStyle: 'short', timeZone: 'UTC' });
	let gD = new Date(Date.UTC(2000, month, day));
	gD = new Date(gD.setUTCDate(gD.getUTCDate() + 226867));
	const gY = gD.getUTCFullYear() - 2000 + year;
	gD = new Date(
		(gY < 0 ? '-' : '+') +
			('00000' + Math.abs(gY)).slice(-6) +
			'-' +
			('0' + (gD.getUTCMonth() + 1)).slice(-2) +
			'-' +
			('0' + gD.getUTCDate()).slice(-2)
	);
	let [pM, pD, pY] = [...dFormat.format(gD).split('/')],
		i = 0;
	gD = new Date(
		gD.setUTCDate(
			gD.getUTCDate() +
				~~(
					year * 365.25 +
					month * 30.44 +
					day -
					(pY.split(' ')[0] * 365.25 + pM * 30.44 + pD * 1)
				) -
				2
		)
	);
	while (i < 4) {
		[pM, pD, pY] = [...dFormat.format(gD).split('/')];
		if (pD == day && pM == month && pY.split(' ')[0] == year) return formatOut(gD);
		gD = new Date(gD.setUTCDate(gD.getUTCDate() + 1));
		i++;
	}
	throw new Error('Invalid Persian Date!');
}
//==========================================================
