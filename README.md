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

- Signup Page
- Login Page
- Dashboard Page (Protected)
- Token stored in localStorage

# Backend (Node.js + Express)

- JWT token generation
- Middleware for authentication
- MongoDB user model

# Tech Stack

Frontend:
- React (Vite)
- React Router
- Fetch API

Backend:
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS

# API Endpoints

- POST /auth/signup
- Register a new user.
- POST /auth/login
- Login & get JWT token.
- GET /auth/me
- Get logged-in user info (requires token).

# How It Works

- User signs up → data stored in MongoDB
- User logs in → backend returns a JWT
- Token saved in localStorage
- Dashboard fetches /auth/me with token
- If token is valid → show user details

# Screenshots
Signup Page
<img width="1896" height="651" alt="image" src="https://github.com/user-attachments/assets/c9af7a65-d336-4e26-9b2e-1d9a2576c8b0" />

Validation 
<img width="1906" height="694" alt="image" src="https://github.com/user-attachments/assets/9e648888-3532-49bf-adbe-daddbd846461" />

Already exits Validation
<img width="1910" height="657" alt="image" src="https://github.com/user-attachments/assets/a1e7c235-f9e8-418f-bad9-27bacf0e5cab" />

Login Page
<img width="1904" height="553" alt="image" src="https://github.com/user-attachments/assets/937e7f49-636f-4004-9a2c-d86698e74f22" />

Password Validation
<img width="1918" height="528" alt="image" src="https://github.com/user-attachments/assets/54897644-dcea-4bec-ba1d-c1217a303e68" />

Dashboard Page
<img width="1914" height="384" alt="image" src="https://github.com/user-attachments/assets/e291ed7d-0a95-4175-8de4-b1e55a48cd04" />

# Future Improvements

- Forgot password
- Refresh token system
- Role-based access (Admin/User)
- UI improvements with Tailwind CSS
