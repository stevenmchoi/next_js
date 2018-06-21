import { createContext } from 'react';

export const employees = [
	{
		employeeName: "Andrew Smith",
		payPeriod: "01 March - 31 March",
		grossIncome: 5004,
		incomeTax: 922,
		netIncome: 4082,
		superAmount: 450
	},
	{
		employeeName: "Claire Wong",
		payPeriod: "01 March - 31 March",
		grossIncome: 10000,
		incomeTax: 2669,
		netIncome: 7331,
		superAmount: 1000
	}
];

export const EmployeeContext = createContext(
	employees
);
