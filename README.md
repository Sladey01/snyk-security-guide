# Snyk Security Guide

An application that summarizes Snyk best practices for different languages and frameworks.

## Overview

This web application provides a comprehensive guide to using Snyk security tools with various programming languages and frameworks. It includes information on:

- Installation instructions
- Basic CLI usage
- SCM integration options
- CLI parameters and options
- Best practices for security
- Common security issues for each language/framework

## Supported Languages

- JavaScript (Node.js, React)
- Python (Django, Flask)
- Java (Spring)
- C# (ASP.NET)
- Go
- PHP (Laravel)
- Docker

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Select a programming language from the dropdown menu
2. Optionally select a framework if available
3. Click "View Best Practices" to see Snyk security recommendations

## Contributing

Contributions are welcome! To add support for additional languages or frameworks:

1. Update the `data/guides.js` file with the new language/framework information
2. Update the frontend dropdown in `views/index.ejs` to include the new option

## License

MIT