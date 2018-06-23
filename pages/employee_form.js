import { Component } from "react";
import { EmployeeContext } from '../components/employee_context'

class EmployeeForm extends Component {
	constructor( props ) {
		super( props );

		let now = new Date();
		let month = now.getUTCMonth() + 1;

		if ( month < 10 ) {
			month = "0" + month;
		}

		let year = now.getUTCFullYear();

		this.state = {
			firstName: "",
			lastName: "",
			annualSalary: "",
			superRate: "",
			payPeriodStartDate: `${year}-${month}`
		}

		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleChange( event ) {
		this.setState( {
			[ event.target.name ]: event.target.value
		} );
	}

	handleSubmit( event, addEmployee ) {
		event.preventDefault();

		if (
			this.state.firstName === "" ||
			this.state.lastName === "" ||
			this.state.annualSalary === "" ||
			this.state.superRate === "" ||
			this.state.payPeriodStartDate === ""
		) {
			console.log( "Error msg: fill in all fields!" )
		} else {
			addEmployee( this.state );

			// Reset input fields
			this.setState( {
				firstName: "",
				lastName: "",
				annualSalary: "",
				superRate: "",
				payPeriodStartDate: ""
			} );
		}
	}

	render() {
		return (
			<EmployeeContext.Consumer>
				{( context ) => (
					<div className="page employee-form">
						<form
							className="container"
							onSubmit={( event ) => ( this.handleSubmit( event, context.addEmployee ) )}
						>
							<h1>New Employee</h1>
							<div className="form-group row">
								<label className="col-sm-6 col-form-label">First Name:</label>
								<div>
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
								<label className="col-sm-6 col-form-label">Last Name:</label>
								<div>
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
								<label className="col-sm-6 col-form-label">Annual Salary (natural numbers):</label>
								<div>
									<input
										type="number"
										name="annualSalary"
										className="form-control"
										value={this.state.annualSalary}
										onChange={this.handleChange}
										placeholder="e.g. 50000"
										min="0"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-sm-6 col-form-label">Super Rate (0% - 12% inclusive):</label>
								<div>
									<input
										type="number"
										name="superRate"
										className="form-control"
										value={this.state.superRate}
										onChange={this.handleChange}
										min="0"
										max="12"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-sm-6 col-form-label">Pay Period Start Date (month and year):</label>
								<div>
									<input
										type="month"
										name="payPeriodStartDate"
										className="form-control"
										value={this.state.payPeriodStartDate}
										onChange={this.handleChange}
										min="2000-01"
										max="2020-12"
									/>
								</div>
							</div>

							<div className="form-group row">
								<div className="col-sm-10">
									<button className="btn btn-primary">Enter</button>
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
