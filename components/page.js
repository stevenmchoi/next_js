import { Component } from "react";
import Menu from "./menu";
import calcNewEmployeeData from "../util/employee_data";

export default class extends Component {
	render() {
		return (
			<main>
				<nav>
					<Menu href={'/'} label={'New Employee'} />
					<Menu key='employees' href={'/employees'} label={'Employees'} />
				</nav>

				{this.props.children}

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
		);
	}
}
