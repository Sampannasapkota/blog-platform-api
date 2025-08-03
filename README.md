# 📝 Blog Platform API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)

A RESTful API for managing blog posts, comments, and users — built using **Node.js**, **Express**, and **MongoDB**. Created as part of the **ebPearls Traineeship Program**.

---

## 🚀 Features

- ✅ User registration and login (with JWT authentication)
- ✅ Create, read, update, and delete blog posts
- ✅ Filter blogs by tags
- ✅ Request validation
- ✅ Pagination for blog lists

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sampannasapkota/blog-platform-api.git
cd blog-platform-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

> Edit `.env` with your own MongoDB URI and JWT secret

### 4. Start the Server

```bash
npm start
```

> Server will run on `http://localhost:3000`

---

## 🔐 Authentication Routes

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login and get token |

---

## 📝 Blog Routes

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/blogs`     | Get all blogs (paginated) |
| POST   | `/api/blogs`     | Create a new blog         |
| GET    | `/api/blogs/:id` | Get a specific blog       |
| PUT    | `/api/blogs/:id` | Update a blog             |
| DELETE | `/api/blogs/:id` | Delete a blog             |

---

## 🔄 Example Request (cURL)

```bash
curl -X POST 'http://localhost:3000/api/blogs' -H 'Authorization: Bearer <your_token>' -H 'Content-Type: application/json' -d '{
  "title": "My First Blog",
  "content": "This is the content of the blog.",
  "tags": ["nodejs", "api"]
}'
```

---

## 🗂️ Project Structure

```text
.
├── src/
│   ├── controllers/     # Logic for each route
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   └── middleware/      # Auth & validation
├── server.js            # App entry point
└── package.json         # Project metadata
```

---
