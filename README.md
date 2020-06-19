# Adonis-React TODO App
A Todo web application created using AdonisJS with MySQL for the backend, and ReactJS for the frontend.

## Instructions
### Backend
- Ensure that latest version of adonis is installed.
```bash
npm i -g @adonisjs/cli
```
- Ensure that SQL is installed

1. Create the sql database
```sql
CREATE DATABASE todo;
```
2. ```bash
cd backend
```
3. Rename the `.env.example` file to `.env`. Set the SQL user(`DB_USER`) and password(`DB_PASSWORD`) in this file.
4. Install dependencies
```bash
npm install
```
5. Start the server
```bash
adonis serve --dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Demo
[Demo](./demo.mp4)
