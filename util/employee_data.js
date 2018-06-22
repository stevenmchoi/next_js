import incomeTaxCalc from "./income_tax";

export default ( newEmployee ) => {
	const employeeName = `${newEmployee.firstName} ${newEmployee.lastName}`;
	const payPeriod = '01 March - 31 March'; // Adjust for dates
	const grossIncome = Math.floor( parseInt( newEmployee.annualSalary ) / 12 );
	const incomeTax = incomeTaxCalc( newEmployee.annualSalary );
	const netIncome = grossIncome - incomeTax;
	const superAmount = Math.floor( grossIncome * newEmployee.superRate * .01 );

	return {
		employeeName,
		payPeriod,
		grossIncome,
		incomeTax,
		netIncome,
		superAmount
	};
};
