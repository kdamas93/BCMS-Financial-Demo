# BCMS Financial Demo

A modern financial management backend API built with Node.js, Express, TypeScript, Prisma ORM, and PostgreSQL.

---

## Features

* JWT Authentication
* User Management
* Account Management
* Category Management
* Transaction Management
* Budget Management
* Dashboard Analytics
* Zod Validation
* Error Handling Middleware
* Logging with Winston
* Repository Pattern Architecture

---

## Tech Stack

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT
* Zod
* Winston

---

## Architecture

This project follows a layered architecture:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Prisma ORM
    ↓
PostgreSQL
```

---

## Project Structure

```text
src
│
├── auth
├── config
├── controllers
├── dtos
├── middlewares
├── repositories
├── routes
├── services
├── utils
├── validators
├── app.ts
└── server.ts
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/kdamas93/BCMS-Financial-Demo.git
```

Install dependencies:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma db push
```

Start the server:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL=
JWT_SECRET=
PORT=
```

---

## API Endpoints

### Authentication

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /api/auth/login |

### Users

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/users     |
| GET    | /api/users/:id |
| POST   | /api/users     |
| PUT    | /api/users/:id |
| DELETE | /api/users/:id |

### Accounts

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/accounts     |
| GET    | /api/accounts/:id |
| POST   | /api/accounts     |
| PUT    | /api/accounts/:id |
| DELETE | /api/accounts/:id |

### Categories

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | /api/categories     |
| GET    | /api/categories/:id |
| POST   | /api/categories     |
| PUT    | /api/categories/:id |
| DELETE | /api/categories/:id |

### Transactions

| Method | Endpoint              |
| ------ | --------------------- |
| GET    | /api/transactions     |
| GET    | /api/transactions/:id |
| POST   | /api/transactions     |
| PUT    | /api/transactions/:id |
| DELETE | /api/transactions/:id |

### Budgets

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | /api/budgets     |
| GET    | /api/budgets/:id |
| POST   | /api/budgets     |
| PUT    | /api/budgets/:id |
| DELETE | /api/budgets/:id |

### Dashboard

| Method | Endpoint               |
| ------ | ---------------------- |
| GET    | /api/dashboard/summary |

---

## Future Improvements

* React + TypeScript Frontend
* Tailwind CSS
* Role-Based Access Control (RBAC)
* Docker Support
* CI/CD Pipeline
* Swagger Documentation
* Unit and Integration Tests

---

## License

MIT
