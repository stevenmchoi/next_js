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
								<div className="col-sm-4">
									<input
										type="text"
										name="firstName"
										className="form-control"
										value={this.state.firstName}
										onChange={this.handleChange}
										placeholder="First Name"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Last Name:</label>
								<div className="col-sm-4">
									<input
										type="text"
										name="lastName"
										className="form-control"
										value={this.state.lastName}
										onChange={this.handleChange}
										placeholder="Last Name"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Annual Salary (natural numbers):</label>
								<div className="col-sm-4">
									<input
										type="text"
										name="annualSalary"
										className="form-control"
										value={this.state.annualSalary}
										onChange={this.handleChange}
										placeholder="e.g. 50000"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Super Rate (0% - 12% inclusive):</label>
								<div className="col-sm-4">
									<input
										type="text"
										name="superRate"
										className="form-control"
										value={this.state.superRate}
										onChange={this.handleChange}
										placeholder="e.g. 10%"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-sm-5 col-form-label">Pay Period Start Date:</label>
								<div className="col-sm-4">
									<input
										type="text"
										name="payPeriodStartDate"
										className="form-control"
										value={this.state.payPeriodStartDate}
										onChange={this.handleChange}
										placeholder="e.g. 01 - March"
									/>
								</div>
							</div>

							<div class="form-group row">
								<div class="col-sm-10">
									<button class="btn btn-primary">Enter</button>
								</div>
							</div>
						</form>
					</div>
				)}
			</EmployeeContext.Consumer>
		);
	}
}
export default EmployeeForm;
