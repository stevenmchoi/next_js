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
						<form className="employee-form" onSubmit={this.handleSubmit}>
							<h1>Employee</h1>
							<div className="form-group row">
								<label className="col-sm-5 col-form-label">First Name:</label>
								<input
									type="text"
									name="firstName"
									value={this.state.firstName}
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Last Name:</label>
								<input
									type="text"
									name="lastName"
									value={this.state.lastName}
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Annual Salary (natural numbers):</label>
								<input
									type="text"
									name="annualSalary"
									value={this.state.annualSalary}
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Super Rate (0% - 12% inclusive):</label>
								<input
									type="text"
									name="superRate"
									value={this.state.superRate}
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Pay Period Start Date (e.g. 01 - March):</label>
								<input
									type="date"
									name="payPeriodStartDate"
									value={this.state.payPeriodStartDate}
									onChange={this.handleChange}
								/>
							</div>

							<button>Enter</button>
						</form>
					</div>
				)}
			</EmployeeContext.Consumer>
		);
	}
}
export default EmployeeForm;
