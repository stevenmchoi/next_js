# Assumptions
* "Separate pages" can be separate components with different URLs, without the
  need to re-render navbar.
* Preloaded employee data with "Andrew Smith and Claire Wong"
* Data calculations happen in other files
* Not enough data to slow down rendering of rows; possible optimization: add
  an HTML row to employeeRows each time
* For easier computation, pay period always starts and ends for the month

# Challenges
* Learning React Context API
  * Passing down global employees' data to Employees page
  * Updating employees table from 'New Employee' form; re-rendering properly
  * Where to place the Providers and organize how to pass the data
    * Creating a default value to avoid using a Provider

# Todos
* Test suite in Jest and Enzyme
* Error messages and styling for New Employee form
