import { EmployeeContext } from "../components/employee_context";

export default () => (
	<EmployeeContext.Consumer>
		{( employees ) => {
			console.log( employees );

			return (
				<div>
					{/* <p>{employees}</p> */}
				</div>
			);
		}}
	</EmployeeContext.Consumer>
);
