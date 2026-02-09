# React Express Full-Stack Application

A full-stack web application built with React (frontend) and Express.js (backend).

## Project Structure

```
react-express/
├── fe/          # React frontend with Vite, TypeScript, and Tailwind CSS
└── server/      # Express.js backend server
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation & Setup

### 1. Install Dependencies

Install frontend dependencies:
```bash
cd fe
npm install
```

Install backend dependencies:
```bash
cd server
npm install
```

### 2. Development

Start the backend server:
```bash
cd server
npm run dev
```

Start the frontend development server:
```bash
cd fe
npm run dev
```

### 3. Build & Production

Build the frontend for production:
```bash
cd fe
npm run build
```

Start the production server:
```bash
cd server
npm start
```

## Available Scripts

### Frontend (fe/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (server/)
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Tech Stack

**Frontend:**
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router

**Backend:**
- Express.js
- Node.js
- CORS enabled
