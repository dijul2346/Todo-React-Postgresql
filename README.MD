# Todo App Backend

This is the backend for a full-stack Todo application built with Node.js, Express, Prisma ORM, PostgreSQL, and JWT authentication.

---

## Features

- **User Signup & Signin**  
  Users can register and log in. JWT tokens are used for authentication.

- **Todo Management**  
  Authenticated users can create, view, and delete their own todos.

- **REST API Endpoints**
  - `POST /signup` — Register a new user
  - `POST /signin` — Authenticate and receive a JWT
  - `POST /todos` — Create a new todo (requires JWT)
  - `GET /todos` — Get all todos for the authenticated user (requires JWT)
  - `DELETE /todo/:id` — Delete a todo by ID (requires JWT)

- **CORS Enabled**  
  Allows the React frontend (running on a different port) to communicate with the backend.

---

## Technologies Used

- **Backend:** Node.js, Express, Prisma ORM, PostgreSQL, JWT, CORS

---

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

### Backend Setup

1. **Clone the repository and navigate to the backend folder:**
    ```sh
    cd Postgress
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Configure environment variables:**  
   Create a `.env` file in the root with:
    ```
    DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<dbname>?schema=public"
    JWT_KEY=your_secret_key
    ```

4. **Run Prisma migrations:**
    ```sh
    npx prisma migrate dev --name init
    ```

5. **Start the backend server:**
    ```sh
    node index.js
    ```

---

## Usage

- **Sign up** with your name, username, and password.
- **Sign in** to receive a JWT token.
- **Create, view, and delete todos** while authenticated.

---

## Notes

- The backend expects the JWT token in the `token` header for protected routes.
- Make sure both backend and frontend servers are running.
- Adjust CORS settings in `index.js` if you deploy to production.