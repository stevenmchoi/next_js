import { EmployeeContext } from "../components/employee_context";
import Page from "../components/main";

export default () => (
	<Page>
		<EmployeeContext.Consumer>
			{( employees ) => {
				console.log( employees );

				return (
					<div className="page">
						<table className="employee-table">
							<thead>
								<tr>
									<th scope="col">Employee Name</th>
									<th scope="col">Pay Period</th>
									<th scope="col">Gross Income</th>
									<th scope="col">Income Tax</th>
									<th scope="col">Net Income</th>
									<th scope="col">Super Amount</th>
								</tr>
							</thead>
						</table>
					</div>
				);
			}}
		</EmployeeContext.Consumer>
	</Page>
);
