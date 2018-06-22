import { Component } from "react";
import { EmployeeContext } from '../components/employee_context'

class EmployeeForm extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			firstName: "",
			lastName: "",
			annualSalary: "",
			superRate: "",
			payPeriodStartDate: ""
		}

		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleChange( event ) {
		this.setState( {
			[ event.target.name ]: event.target.value
		} );
	}

	handleSubmit( event ) {
		event.preventDefault();
	}

	render() {
		return (
			<EmployeeContext.Consumer>
				{( employees ) => (
					<div className="page">
						<h1>Employee</h1>
						<form className="employee-form" onSubmit={this.handleSubmit}>
							<label>First Name:
								<input
									type="text"
									name="firstName"
									value={this.state.firstName}
									onChange={this.handleChange}
								/>
							</label>

							<br />

							<label>Last Name:
								<input
									type="text"
									name="lastName"
									value={this.state.lastName}
									onChange={this.handleChange}
								/>
							</label>

							<br />

							<label>Annual Salary (natural numbers):
								<input
									type="text"
									name="annualSalary"
									value={this.state.annualSalary}
									onChange={this.handleChange}
								/>
							</label>

							<br />

							<label>Super Rate (0% - 12% inclusive):
								<input
									type="text"
									name="superRate"
									value={this.state.superRate}
									onChange={this.handleChange}
								/>
							</label>

							<br />

							<label>Pay Period Start Date (e.g. 01 - March):
								<input
									type="date"
									name="payPeriodStartDate"
									value={this.state.payPeriodStartDate}
									onChange={this.handleChange}
								/>
							</label>

							<br />

							<button>Enter</button>
						</form>
					</div>
				)}
			</EmployeeContext.Consumer>
		);
	}
}
export default EmployeeForm;
