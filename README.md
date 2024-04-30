# Employee Tracker

## Description

The Employee Tracker is a Node.js application that helps manage employees, roles, and departments within a company. It provides functionalities for viewing all departments, roles, and employees, as well as adding, updating, and deleting them. This application utilizes the MySQL database for storing and retrieving data and the Inquirer module for user interaction through the command line interface.

## Table of Contents

- [Files](#files)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [License](#license)

## Files

- `index.js`: Entry point for the application. Contains the main functionality and user prompts.
- `db/connection.js`: Establishes the connection to the MySQL database.
- `db/index.js`: Defines the database class with methods for CRUD operations.
- `db/schema.sql`: SQL schema for creating the database tables.
- `db/seeds.sql`: SQL seed data for populating the database with initial values.

## Dependencies

- `inquirer`: A collection of common interactive command line user interfaces.
- `mysql2`: MySQL client for Node.js, enabling access to MySQL databases.

## Installation

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/jordanchives/employee-tracker.git
    ```

2. Navigate to the project directory:

    ```
    cd employee-tracker
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Set up your MySQL database by executing the SQL schema and seed data scripts provided in the `db/` directory.

## Usage

1. Open a terminal and navigate to the project directory.

2. Run the following command to start the application:

    ```
    npm start
    ```

3. Follow the prompts in the command line interface to perform various actions such as viewing, adding, updating, or deleting departments, roles, and employees.

## Preview

### Screenshots

![Main Prompt](/assets/main.png)

![Table](/assets/table.png)

![Delete Prompt](/assets/delete.png)

![Add Prompt](/assets/add.png)

### Video Preview

A video preview of the application can be found [here](https://jordanchives.github.io/employee-tracker/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
