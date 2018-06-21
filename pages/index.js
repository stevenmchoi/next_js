import { Component } from "react";
import Page from '../components/main';
import EmployeeForm from './employee_form';
import EmployeeIndex from './employee_index'

import { EmployeeContext, employees } from '../components/employee_context'

export default class extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			employees
		}
	}

	render() {
		return (
			<html>
				<head>
					<title>Paystubs</title>
				</head>
				<body>
					<Page>
						<EmployeeContext.Provider value={this.state.employees}>
							{/* <EmployeeForm /> */}
							<EmployeeIndex />
						</EmployeeContext.Provider>
					</Page>
				</body>
			</html>
		);

	}
}
