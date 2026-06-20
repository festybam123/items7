# Items7 - Restaurant Ordering System

A modern full-stack restaurant ordering application with React frontend and Express.js backend.

## 📁 Project Structure

```
items7/
├── frontend/           # React application
│   ├── src/           # React components and pages
│   ├── public/        # Static assets
│   ├── package.json   # Frontend dependencies
│   ├── vite.config.js # Vite configuration
│   └── index.html     # Main HTML file
├── backend/           # Express.js server
│   ├── server/        # Server code and routes
│   ├── api/           # API endpoints (orders, payments)
│   ├── package.json   # Backend dependencies
│   └── .env.example   # Environment variables template
├── package.json       # Root orchestration
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 24.x or higher
- npm or yarn
- MongoDB URI (for database)
- Stripe API keys (for payments)

### Installation

1. Install all dependencies:
   ```bash
   npm run install:all
   ```

2. Create environment files:
   - Copy `backend/.env.example` to `backend/.env`
   - Fill in your MongoDB URI and Stripe keys

### Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:
```bash
# Terminal 1 - Frontend (http://localhost:5173)
cd frontend && npm run dev

# Terminal 2 - Backend (http://localhost:5000)
cd backend && npm run dev
```

### Build

```bash
npm run build
```

## 📦 Frontend

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Payments**: Stripe (React integration)

## 🔌 Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Payments**: Stripe API
- **CORS**: Enabled for frontend

## 🔧 Available Scripts

### Root Commands
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both frontend and backend
- `npm run frontend:dev` - Start only frontend
- `npm run backend:dev` - Start only backend
- `npm run lint` - Run ESLint on frontend

### Frontend Commands (from frontend/ directory)
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Commands (from backend/ directory)
- `npm run start` - Start the server
- `npm run dev` - Start in development mode

## 🌐 API Endpoints

All API calls proxy through `/api/*` to `http://localhost:5000`

Key endpoints (defined in `backend/api/`):
- POST `/api/orders` - Create new order
- GET `/api/orders` - Fetch orders
- POST `/api/create-payment-intent` - Create Stripe payment intent

## 📝 Environment Variables

Create `backend/.env` based on `backend/.env.example`:

```env
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

## 🎯 Features

- Modern React UI with Tailwind CSS
- Real-time order management
- Stripe payment integration
- MongoDB database
- RESTful API backend
- CORS-enabled for frontend communication
- Environment-based configuration

## 📄 License

MIT
