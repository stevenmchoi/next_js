export default ( payPeriodStartDate ) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	let dateList = payPeriodStartDate.split( '-' );
	let year = dateList[ 0 ];
	let monthNum = parseInt( dateList[ 1 ] );
	let month = months[ monthNum - 1 ];
	let endDate = new Date( year, monthNum, 0 ).getDate();
	let payPeriod = `01 ${month} - ${endDate} ${month}`;

	return payPeriod;
};
