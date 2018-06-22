export default ( annualSalary ) => {
	let incomeTax = 0;

	if ( 18200 < annualSalary && annualSalary <= 37000 ) {
		incomeTax = Math.floor( .19 * ( annualSalary - 18200 ) );
	} else if ( 37000 < annualSalary && annualSalary <= 87000 ) {
		incomeTax = 3572 + Math.floor( .325 * ( annualSalary - 37000 ) );
	} else if ( 87000 < annualSalary && annualSalary <= 180000 ) {
		incomeTax = 19822 + Math.floor( .37 * ( annualSalary - 87000 ) );
	} else if ( 180000 < annualSalary ) {
		incomeTax = 54232 + Math.floor( .45 * ( annualSalary - 180000 ) );
	}

	return incomeTax;
};
