import Page from '../components/employee_form';

export default () => (
	<Page>
		<html>
			<head>Paystubs</head>
			<body>
				<h1>Employee</h1>
				<form className="employee-form">
					<label>First Name:
					<input type="text" />
					</label>

					<br />

					<label>Last Name:
					<input type="text" />
					</label>

					<br />

					<label>Annual Salary (natural numbers):
					<input type="text" />
					</label>

					<br />

					<label>Super Rate (0% - 12% inclusive):
					<input type="text" />
					</label>

					<br />

					<label>Pay Period Start Date (e.g. 01 - March):
					<input type="text" />
					</label>
				</form>
			</body>
		</html>
	</Page>
);
