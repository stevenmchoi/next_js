# Assumptions
* "Separate pages" can be separate components with different URLs, without the
  need to re-render navbar.
* Preloaded employee data with "Andrew Smith and Claire Wong"
* Data calculations happen in other files
* Not enough data or pages to slow down rendering, but room for possible
  optimization
  * Rather than re-rendering entire HTML page with each new page, only re-render
    main page elements, not the navbar
  * Rather than re-rendering "Employees" table each time the `/employees` page
    appears, keep employeeRows table element & add HTML row on each form submission
* For easier computation, pay period always starts and ends for the month

# Challenges
* Learning React Context API
  * Passing down global employees' data to Employees page
  * Updating employees table from 'New Employee' form; re-rendering properly
  * Where to place the Providers and organize how to pass the data
    * Creating a default value to avoid using a Provider
* Using NextJS to host a GitHub Page
  * Building and exporting to `/out` folder
  * Maintaining asset prefix for navbar links

# Todos
* Test suite in Jest and Enzyme
* Generating and styling error messages for the "New Employee" form
