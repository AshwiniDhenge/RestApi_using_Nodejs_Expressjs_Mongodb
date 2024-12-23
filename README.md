# Task Management API

A RESTful API for managing tasks with user authentication.

## Features

- User authentication with JWT
- CRUD operations for tasks
- Input validation
- Error handling
- API documentation with Swagger
- Pagination support
- MongoDB for DB

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
 - Create a MongoDB database
4. Start the server:
   ```bash
   npm run dev
   ```

The server will start on http://localhost:3000

## API Documentation

Access the Swagger documentation at http://localhost:3000/api-docs

## API Endpoints

### Authentication

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and get JWT token

### Tasks

- GET /api/tasks - Get all tasks (paginated)
- GET /api/tasks/:id - Get a specific task
- POST /api/tasks - Create a new task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task

## Environment Variables

Create a .env file 
```
PORT=3000
JWT_SECRET=your-secret-key
```

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Security

- Password hashing using bcrypt
- JWT for authentication
- Protected routes using middleware
- Input validation
- CORS enabled