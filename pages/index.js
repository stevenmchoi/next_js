import { Component } from "react";
import Page from '../components/main';
import EmployeeForm from './employee_form';
import EmployeeIndex from './employees'

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
			<Page>
				<EmployeeContext.Provider value={this.state.employees}>
					<EmployeeForm />
				</EmployeeContext.Provider>
			</Page>
		);

	}
}
