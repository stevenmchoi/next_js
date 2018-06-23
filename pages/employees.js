import { Component } from "react";
import { EmployeeContext } from "../components/employee_context";
import Page from "../components/page";

class EmployeesTable extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		window.b = EmployeeContext;
	}

	render() {
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
						{this.props.employeeRows}
					</tbody>
				</table>
			</div>
		);
	}
}

export default props => (
	<Page>
		<EmployeeContext.Consumer>
			{
				( { employeeRows } ) =>
					<EmployeesTable employeeRows={employeeRows()} />
			}
		</EmployeeContext.Consumer>
	</Page>
)
