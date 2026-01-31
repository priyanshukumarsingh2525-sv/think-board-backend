# Traffic Control Backend (Rate Limiting Demo)

This is a simple backend project built to understand **traffic control (rate limiting)** in a practical way.  
The main goal of this project is to control how many requests a user can make to the server within a given time window.

It helps in preventing:
- Server overload
- Abuse of APIs
- Brute force or spam requests

This project is intentionally kept simple so the concept of traffic control can be easily understood.

--->

## 🚀 Features
- Basic REST API using Node.js and Express
- Traffic control using rate limiting middleware
- Limits number of requests per user/IP
- Returns proper error message when limit is exceeded
- Clean and modular folder structure

--->

## 🛠 Tech Stack
- Node.js
- Express.js
- Middleware-based rate limiting
- dotenv (for environment variables)

