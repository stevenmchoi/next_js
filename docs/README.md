# Employee Paystubs (WIP))
[Live Site](https://stevenmchoi.github.io/next_js/)

This is a web application that takes an employee's details, received through a form, on the
root page and generates a table of employee paystubs.

This is part of a coding challenge to create a server-side rendered React
application. It uses Bootstrap, React, React Context API, and
NextJS.

## Input (form fields on root page)
On the "New Employee" page (the root page), fill out the following fields on the home page and click "Enter":
* First Name (of employee)
* Last Name (of employee)
* Annual Salary (natural numbers)
* Super Rate (0% - 12% inclusive)
* Pay Period (month and year)

## Output (information on the table)
With each new entry from the "New Employee" page, clicking "Employees" in the
navbar will take the user to the "Employees" page, which generates a new table
with the following output:
* Employee Name (full name)
* Pay Period (assumed to be start and end of month)
* Gross Income (monthly)
* Income Tax (based off of [ATO tax table](https://www.ato.gov.au/Rates/Individual-income-tax-rates))
* Net Income (Gross Income - Income Tax)
* Super Amount ("superannuation"; Gross Income * Super Rate)

## Assumptions, Challenges, and Todos
[marked here](https://github.com/stevenmchoi/next_js/blob/master/docs/NOTES.md)
