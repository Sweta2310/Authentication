# Authentication
***Mini Auth Project – React + Node.js + MongoDB****

A simple user authentication system built for practice and internship tasks.
This project includes:

- User Signup
- User Login
- JWT Authentication
- Protected Dashboard
- React Frontend + Node/Express Backend + MongoDB

# Features
Authentication

- Signup with name, email, password
- Passwords stored as bcrypt hashed
- Login with JWT token
- Protected route 

# Frontend (React)

Signup Page
Login Page
Dashboard Page (Protected)
Token stored in localStorage

# Backend (Node.js + Express)

JWT token generation
Middleware for authentication
MongoDB user model

# Tech Stack

Frontend:
React (Vite)
React Router
Fetch API

Backend:
Node.js + Express
MongoDB + Mongoose
JWT (jsonwebtoken)
bcryptjs
CORS

# Backend Setup
Install dependencies
cd backend
npm install

Add .env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

Start server
npm run dev

# Frontend Setup
Install dependencies
cd frontend
npm install

Add .env
VITE_API_BASE=http://localhost:5000

Start frontend
npm run dev

# API Endpoints

POST /auth/signup
Register a new user.
POST /auth/login
Login & get JWT token.
GET /auth/me
Get logged-in user info (requires token).

# How It Works

User signs up → data stored in MongoDB
User logs in → backend returns a JWT
Token saved in localStorage
Dashboard fetches /auth/me with token
If token is valid → show user details

Screenshots



# Future Improvements

Forgot password
Refresh token system
Role-based access (Admin/User)
UI improvements with Tailwind CSS
