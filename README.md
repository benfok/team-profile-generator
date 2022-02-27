# Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This app takes in command line inputs from a Team Manager and generates a responsive webpage to keep all their contact information in one place. Team members are assigned specific roles by the user that pull in fields related to their job. The code is written in a way to support saving to a database in the future or for easily adding more fields about each employee should that be useful. The app is written entirely in JavaScript along with a sinlge .css stylesheet in order to style the html that is generated and rendered to the index.html file that is created. The app is deployed using Node.js and includes test scripts to test the object generation code.

<details>
<summary><strong>Table of Contents</strong></summary>

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Tests](#tests)
- [Questions](#questions)
- [Additional Sections](#additional-sections)
</details>

## Installation
- Clone the repo
- Navigate to the folder and run npm init followed by npm install -D jest in order to install jest as a dev dependecy for testing
- Install inquirer by running npm install inquirer
- Be sure to check the .gitignore file before pushing if you wish to push to a GitHub repo

## Usage
The application can be run by navigating to the root directory and typing node index.js into your terminal. The prompts will appear there. Upon creating a Team Profile files using the prompts, an index.html file will be generated in the ./dist folder.

## License
Distributed under the **MIT** license.

## Contributing Guidelines
Contributions help our open source community to continue to evolve, and any contributions are greatly appreciated. If you have a suggestion that would improve this code please follow the directions below. I require that any and all changes adhere to the Code of Conduct outlined in the [Contributor Covenant](https://www.contributor-covenant.org/).

 - Fork the repo
 - Create your feature branch
 - Commit your changes
 - Push the branch and open a pull request

> _**Note:** Any contributions are understood to be under the same MIT that covers the project. If this is a concern please contact me._

## Tests
There are tests written that test the object classes and constructor functions within the Employee.js, Manager.js, Engineer.js and Intern.js files. These can all be run using jest, by simply typing npm test into the terminal when pointed at the application's root directory.

## Languages, Skills and Credits
- JavaScript
- Node.js
- Inquirer module
- HTML
- CSS
- FontAwesome for icons

## Screenshot
Here is an example screenshot of a page generated by the application. Some key details and learnings are below.

![Screenshot of my finished webpage](./images/screenshot-final.png)

## Details and Learnings
- Creating a prototype HTML page was useful to get the styling and the html string in order to execute the page creation
- Creating the employees as objects from the prompt data, then passing this data as variables into the string of html code felt like an unecessary additional step (could hav ejust gone straight from the prompt inputs to the html code) but does create the opportunity to more easily take the team data and store it elsewhere (e.g. a database) in the future
- This app was written under the philsophy of Test Driven Development i.e. the tests were written and then the classes and constructors coded to pass the tests
- The command line is a challenging environment to provide the length of responses sought after for this application
- I added functionality for the user to determine whether or not they wish to overwrite an existing README file or create a new one. This allows the generator to have a broader application

## Questions and Links
Please reach out with any questions regarding the application.

The repository in GitHub is [here](https://github.com/benfok/team-profile-generator)

