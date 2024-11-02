# Calculator App

A calculator application built with a **Spring Boot** backend and a **React** frontend. This app supports basic mathematical operations.

## Features

- Basic operations: Addition, Subtraction, Multiplication, Division, and Exponentiation (e.g., `x^y`)
- Clean and responsive button layout for better usability

## Installation

### Backend (Spring Boot)

1. Clone the repository:

2. Navigate to the backend directory and run the Spring Boot application:
    ```bash
    cd calculator-web-app/backend
    ./mvnw spring-boot:run
    ```
3. The Spring Boot server will start on `http://localhost:8080`.

### Frontend (React)

1. In a new terminal, navigate to the frontend directory:
    ```bash
    cd calculator-web-app/frontEnd
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React app:
    ```bash
    npm start
    ```
4. The React app will open on http://localhost:3000.

## Usage

- Enter numbers and select an operation (like addition, multiplication, or exponentiation).
- The results will display after clicking the equal button `=` .
