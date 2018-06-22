import { Component } from "react";
import Menu from "./menu";

import { EmployeeContext, employees } from '../components/employee_context'

export default class extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			employees,
			addEmployee: ( newEmployee ) => {
				console.log( newEmployee );

				this.setState( {
					employees: [ ...this.state.employees, newEmployee ]
				} );
			}
		}
	}

	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />

					<title>Employee Paystubs</title>
				</head>
				<body>
					<main>
						<nav>
							<Menu href={'/'} label={'New Employee'} />
							<Menu key='employees' href={'/employees'} label={'Employees'} />
						</nav>

						<EmployeeContext.Provider value={this.state}>
							{this.props.children}
						</EmployeeContext.Provider>

						<style global jsx>{`
							body {
								font-family: Helvetica, sans-serif;
							};

							nav {
								text-align: left;
								background-color: #000;
								color: #fff;
								padding: 12px;
								position: fixed;
								z-index: 1000;
								top: 0;
								left: 0;
								right: 0;
							};

							a {
								color: #0e0e0e;
								text-decoration: none;
							};

							.page {
								width: 100%;
								color: #333;
								margin-top: 45px;
							};

							.employee-form {
								width: 600px;
								margin: 60px 15px;
								padding: 15px 15px;
								box-shadow: 0 0 2px gray;
								border-radius: 10px;
								box-sizing: border-box;
							};
						`}</style>
					</main>

					<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossOrigin="anonymous"></script>
				</body>
			</html>
		);
	}
}
