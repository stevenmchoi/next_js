import { Component } from "react";
import ReactDOM from "react-dom";
import Page from '../components/page';
import EmployeeForm from './employee_form';
import Employees from './employees'

import { EmployeeContext, employees } from '../components/employee_context'

export default () => (
	<Page>
		<EmployeeForm />
	</Page>
);
