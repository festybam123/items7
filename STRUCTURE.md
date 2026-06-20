# Items7 - Project Structure Guide

## Overview

This project has been reorganized into a clean **frontend** and **backend** separation for better maintainability and scalability.

## New Directory Structure

```
items7/
├── frontend/                    # React Application
│   ├── src/
│   │   ├── component/          # React components (About, Menu, Cart, etc.)
│   │   ├── assets/             # Images, fonts, other static assets
│   │   ├── App.jsx             # Main app component with routing
│   │   ├── App.css             # Global styles
│   │   ├── index.css           # Tailwind & base styles
│   │   └── main.jsx            # React entry point
│   ├── public/
│   │   ├── images/             # Public images (pix1.jpg, pix4.avif, etc.)
│   │   └── vite.svg            # Vite logo
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── postcss.config.js       # PostCSS configuration
│   ├── eslint.config.js        # ESLint configuration
│   ├── index.html              # HTML entry point
│   └── .gitignore              # Frontend git ignore rules
│
├── backend/                     # Express.js Backend
│   ├── server/
│   │   ├── index.js            # Express server setup & routes
│   │   ├── package.json        # Server-specific dependencies
│   │   ├── package-lock.json
│   │   └── node_modules/       # Backend dependencies
│   ├── api/
│   │   ├── orders.js           # Order management endpoints
│   │   └── create-payment-intent.js  # Stripe payment endpoints
│   ├── package.json            # Backend root dependencies
│   ├── .env.example            # Environment template
│   ├── .gitignore              # Backend git ignore rules
│   └── node_modules/           # Backend dependencies
│
├── package.json                # Root orchestration file
├── .env                        # Environment variables (root level)
├── .gitignore                  # Project-level git ignore
├── README.md                   # Main project documentation
├── STRUCTURE.md                # This file
└── vercel.json                 # Deployment configuration
```

## Frontend (/frontend)

### Technologies
- **React 19** - UI library
- **Vite 5.4** - Build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **Stripe React** - Payment integration

### Key Files
- `src/App.jsx` - Main application component with all routes
- `src/component/` - Individual page components (Items7, Menu, Order, Cart, etc.)
- `src/App.css` - All styling for components
- `public/images/` - Restaurant images and assets

### Running Frontend
```bash
cd frontend
npm install
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
npm run lint         # Run ESLint
```

## Backend (/backend)

### Technologies
- **Node.js 24.x** - Runtime
- **Express.js 4.18** - Web framework
- **MongoDB** - Database
- **Stripe API** - Payment processing
- **CORS** - Cross-origin requests

### Key Files
- `server/index.js` - Express server, middleware setup, route definitions
- `api/orders.js` - Order CRUD operations
- `api/create-payment-intent.js` - Stripe payment intent creation

### Running Backend
```bash
cd backend
npm install
npm run start        # Start server (localhost:5000)
npm run dev          # Development mode
```

### Environment Variables (backend/.env)
```env
MONGODB_URI=mongodb://...
STRIPE_SECRET_KEY=sk_test_...
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

## Root Level Commands

From the `items7/` root directory:

```bash
# Install all dependencies
npm run install:all

# Development (starts both frontend and backend)
npm run dev

# Build both projects
npm run build

# Individual commands
npm run frontend:dev
npm run backend:dev
npm run frontend:build
npm run backend:build
npm run lint
```

## Migration Notes

### Files That Can Be Deleted (Old Structure)
The following files/folders in the root are now duplicated in their respective new locations and can be safely deleted:

- `src/` → Moved to `frontend/src/`
- `public/` → Moved to `frontend/public/`
- `server/` → Moved to `backend/server/`
- `api/` → Moved to `backend/api/`
- `index.html` → Moved to `frontend/index.html`
- `vite.config.js` → Moved to `frontend/vite.config.js`
- `tailwind.config.js` → Moved to `frontend/tailwind.config.js`
- `postcss.config.js` → Moved to `frontend/postcss.config.js`
- `eslint.config.js` → Moved to `frontend/eslint.config.js`

### Keep Root Level Files
- `.env` - Contains shared environment variables
- `.gitignore` - Project-level Git configuration
- `package.json` - New orchestration file
- `vercel.json` - Deployment configuration
- `.git/` - Git repository
- `README.md` - Updated documentation
- `STRUCTURE.md` - This structure guide
- `node_modules/` (if keeping for concurrently)

## API Communication

### Frontend to Backend
The frontend is configured to proxy API calls:
- Requests to `/api/*` are routed to `http://localhost:5000`
- Configured in `frontend/vite.config.js`

### Example API Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - Fetch orders
- `POST /api/create-payment-intent` - Create Stripe payment intent

## Development Workflow

### Starting Development

**Option 1: Run both together (from root)**
```bash
npm run dev
```
This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

**Option 2: Run separately**
```bash
# Terminal 1
cd frontend && npm run dev

# Terminal 2
cd backend && npm run dev
```

### Building for Production

```bash
npm run build
```

This builds:
- `frontend/dist/` - Frontend static files (ready for CDN/hosting)
- Backend is a Node.js application (deploy as is)

## Important Considerations

### Database
- MongoDB connection string in `backend/.env`
- Orders collection managed in `backend/api/orders.js`

### Stripe Integration
- Stripe keys in `backend/.env`
- Frontend uses `@stripe/react-stripe-js` for UI
- Backend processes payments via `create-payment-intent.js`

### CORS Configuration
- Backend allows requests from `http://localhost:5173` (dev)
- Production URL: `https://items7-98zr.vercel.app`
- Configured in `backend/server/index.js`

### File Paths
- Images referenced as `/images/pix1.jpg` (from `public/` folder)
- CSS imports work relative to file location
- No need to change import paths after migration

## Deployment

### Vercel
The `vercel.json` file is configured for this structure:
- Frontend builds to `dist/`
- Backend is the Node.js server

Deploy both separately or as a monorepo depending on your Vercel configuration.

### Environmental Setup
Ensure these are set in your deployment platform:
- `MONGODB_URI`
- `STRIPE_SECRET_KEY`
- `CORS_ORIGIN` (production domain)

## Troubleshooting

### "Cannot find module" errors
- Run `npm install` in both frontend and backend directories
- Or use `npm run install:all` from root

### Port already in use
- Frontend: Default 5173, change with `--port` flag
- Backend: Default 5000, change `PORT` in `.env`

### CORS errors
- Check `CORS_ORIGIN` in `backend/.env`
- Ensure frontend makes requests to `/api/*` (uses proxy)

### Image not loading
- Ensure images are in `frontend/public/images/`
- Reference as `/images/filename.ext` in components

---

For more details, see [README.md](./README.md)
