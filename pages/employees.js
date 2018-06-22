import { EmployeeContext } from "../components/employee_context";
import Page from "../components/main";

export default () => (
	<Page>
		<EmployeeContext.Consumer>
			{( { employees } ) => {
				let employeeRows = employees.map( ( {
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

				return (
					<div className="page">
						<table className="table table-striped">
							<thead className="thead-dark">
								<tr key="header-row">
									<th scope="col">Employee Name</th>
									<th scope="col">Pay Period</th>
									<th scope="col">Gross Income</th>
									<th scope="col">Income Tax</th>
									<th scope="col">Net Income</th>
									<th scope="col">Super Amount</th>
								</tr>
							</thead>
							<tbody>
								{employeeRows}
							</tbody>
						</table>
					</div>
				);
			}}
		</EmployeeContext.Consumer>
	</Page>
);
