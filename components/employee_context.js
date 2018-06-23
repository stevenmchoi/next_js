import { createContext } from 'react';
import calcNewEmployeeData from "../util/employee_data";

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

function addEmployee( newEmployee ) {
	const newEmployeeData = calcNewEmployeeData( newEmployee );
	console.log( newEmployeeData );

	console.log( "New array:" );

	employee.push( newEmployeeData );
}

export const employeeRows = () => employees.map(
	( {
		employeeName,
		payPeriod,
		grossIncome,
		incomeTax,
		netIncome,
		superAmount
	} ) => (
			<tr key={employeeName}>
				<th scope="row">{employeeName}</th>
				<td>{payPeriod}</td>
				<td>{grossIncome}</td>
				<td>{incomeTax}</td>
				<td>{netIncome}</td>
				<td>{superAmount}</td>
			</tr>
		) );

export const EmployeeContext = createContext( {
	employees,
	addEmployee,
	employeeRows
} );
