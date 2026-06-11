# Placement Registration Portal

A serverless web application that allows students to register for placement opportunities. The application is hosted on AWS and uses a fully serverless architecture.

## Technologies Used

- HTML
- CSS
- JavaScript
- AWS Lambda (Python)
- Amazon API Gateway
- Amazon S3

## Architecture

Frontend (Amazon S3 Static Website Hosting)
↓
API Gateway
↓
AWS Lambda (Python)
↓
Amazon S3 (students.json)

## Features

- Student registration form
- Serverless backend using AWS Lambda
- HTTP API integration using Amazon API Gateway
- Student data stored in Amazon S3
- Static website hosting using Amazon S3

## Project Structure

```
PlacementRegistrationPortal/
│
├── index.html
├── style.css
├── script.js
├── students.json
└── README.md
```

## How It Works

1. User enters registration details.
2. JavaScript sends data to API Gateway.
3. API Gateway invokes AWS Lambda.
4. Lambda updates `students.json` in Amazon S3.
5. Registration success message is returned to the user.

## Future Improvements

- Input validation
- Student dashboard
- Database integration using DynamoDB
- Authentication and authorization
- Admin panel for viewing registrations

## Author

Sahil Sharma
