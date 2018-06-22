export default ( annualSalary ) => {
	let incomeTax = 0;

	if ( 18200 < annualSalary && annualSalary <= 37000 ) {
		incomeTax = Math.round( ( .19 * ( annualSalary - 18200 ) ) / 12 );
	} else if ( 37000 < annualSalary && annualSalary <= 87000 ) {
		incomeTax = Math.round( ( 3572 + .325 * ( annualSalary - 37000 ) ) / 12 );
	} else if ( 87000 < annualSalary && annualSalary <= 180000 ) {
		incomeTax = Math.round( ( 19822 + .37 * ( annualSalary - 87000 ) ) / 12 );
	} else if ( 180000 < annualSalary ) {
		incomeTax = Math.round( ( 54232 + .45 * ( annualSalary - 180000 ) ) / 12 );
	}

	return incomeTax;
};
