# 🌤️ Weather Subscription Service

This is a simple Node.js service that allows users to subscribe to regular weather updates for a selected city.

🖥️ **Frontend is available here**:  
👉 [https://weather-frontend-flame-gamma.vercel.app/](https://weather-frontend-flame-gamma.vercel.app/)

---

## 📦 Features

- **Subscribe** with email, city, and update frequency (`hourly` or `daily`)
- **Confirm** your subscription via email
- **Unsubscribe** anytime using the confirmation link
- **Get current weather** data for any city
- Emails are sent using Gmail SMTP
- MongoDB stores all subscriptions
- Migrations handled using `migrate-mongo`
- Fully Dockerized (Docker + Docker Compose)

---

## 🔧 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Axios for weather API requests
- JWT for secure email links
- Nodemailer for sending emails
- Docker for containerization

---

# 🌤️ Weather Subscription Service

This is a simple Node.js service that allows users to subscribe to regular weather updates for a selected city.

## 📦 Features

- **Subscribe** with email, city, and update frequency (`hourly` or `daily`)
- **Confirm** your subscription via email
- **Unsubscribe** anytime using the token from email
- **Get current weather** data for any city
- Emails are sent using Gmail SMTP
- MongoDB stores all subscriptions
- Migrations handled using `migrate-mongo`
- Fully Dockerized (Docker + Docker Compose)

---

## 🔧 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Axios for weather API requests
- JWT for secure email links
- Nodemailer for sending emails
- Docker for containerization

---

---

## 🚀 How it Works

1. A user subscribes with their email, a city, and frequency.
2. A confirmation email is sent with a link.
3. Once confirmed, the user is saved with `confirmed: true`.
4. The service uses an external weather API to fetch data.
5. Subscriptions are stored in MongoDB.

---

## 📩 API Endpoints

- `POST /subscribe`  
  → Create a new subscription

- `GET /confirm/:token`  
  → Confirm a subscription via token

- `GET /unsubscribe/:token`  
  → Cancel a subscription via token

- `GET /weather?city=Kyiv`  
  → Get current weather for a city

---

## 🐳 Run with Docker

1. Create a `.env` file with:
MONGO_URI=mongodb://mongo:27017/weather
MONGO_DATABASE=weather
WEATHER_API_KEY=your_weather_api_key
SMTP_USER=your_gmail_user
SMTP_PASS=your_gmail_password
BASE_URL=http://localhost:3000
TOKEN_SECRET= your_secret_password

2. Then run:

```bash
docker-compose up --build



