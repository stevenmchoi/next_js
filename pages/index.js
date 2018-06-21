import { Component } from "react";
import Page from '../components/main';
import EmployeeForm from './employee_form';

export default class extends Component {
	render() {
		return (
			<html>
				<head>
					<title>Paystubs</title>
				</head>
				<body>
					<Page>
						<EmployeeForm />
					</Page>
				</body>
			</html>
		);

	}
}
