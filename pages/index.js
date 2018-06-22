import { Component } from "react";
import Page from '../components/main';
import EmployeeForm from './employee_form';
import EmployeeIndex from './employees'

import { EmployeeContext, employees } from '../components/employee_context'

export default () => (
	<Page>
		<EmployeeForm />
	</Page>
);
