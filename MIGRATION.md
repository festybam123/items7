# Migration Guide & Cleanup Instructions

## ✅ What Has Been Done

Your project has been successfully separated into **frontend** and **backend** directories with the following structure:

### Frontend Setup (`/frontend`)
- ✅ `src/` directory with all React components
- ✅ `public/images/` with all assets
- ✅ Configuration files: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`
- ✅ `package.json` with frontend-specific dependencies
- ✅ `index.html` entry point
- ✅ `.gitignore` for frontend

### Backend Setup (`/backend`)
- ✅ `server/` directory with Express server and routes
- ✅ `api/` directory with API endpoints
- ✅ `package.json` with backend-specific dependencies
- ✅ `.env` file copied with your credentials
- ✅ `.env.example` template for reference
- ✅ `.gitignore` for backend

### Root Level
- ✅ Updated `package.json` with orchestration scripts
- ✅ Updated `README.md` with full documentation
- ✅ New `STRUCTURE.md` with detailed structure guide
- ✅ Concurrently package ready for parallel development

## 🧹 Cleanup Instructions

The following files/folders are now **duplicated** in their new locations and can be safely **deleted** from the root directory:

### Files to DELETE from Root (`/`)

1. **Old Source Code**
   - `src/` → Already copied to `frontend/src/`
   - `api/` → Already copied to `backend/api/`
   - `server/` → Already copied to `backend/server/`

2. **Old Configuration Files**
   - `index.html` → Already at `frontend/index.html`
   - `vite.config.js` → Already at `frontend/vite.config.js`
   - `tailwind.config.js` → Already at `frontend/tailwind.config.js`
   - `postcss.config.js` → Already at `frontend/postcss.config.js`
   - `eslint.config.js` → Already at `frontend/eslint.config.js`

3. **Old Public Assets**
   - `public/` → Already at `frontend/public/`

### Files to KEEP in Root (`/`)

- `.env` - Can stay (some projects use root-level env)
- `.gitignore` - Project-level ignore
- `package.json` - NEW orchestration file
- `README.md` - Updated documentation
- `STRUCTURE.md` - Structure guide
- `vercel.json` - Deployment config
- `.git/` - Repository
- `node_modules/` (optional, for concurrently)
- `.vercel/` - Vercel config
- `.qodo/` - Any QA tools
- `.vscode/` - VS Code settings
- `server.err`, `server.log` - Debug logs (optional)
- `test-order.js`, `test-order.mjs` - Test files (keep if needed)

## 🗑️ Deletion Steps (PowerShell)

Run these commands to delete the old duplicated files:

```powershell
# Navigate to project root
cd c:\Users\HP\Desktop\items7

# Delete old directories
Remove-Item src -Recurse -Force
Remove-Item api -Recurse -Force
Remove-Item server -Recurse -Force
Remove-Item public -Recurse -Force

# Delete old config files (one by one to be safe)
Remove-Item index.html -Force
Remove-Item vite.config.js -Force
Remove-Item tailwind.config.js -Force
Remove-Item postcss.config.js -Force
Remove-Item eslint.config.js -Force
```

### Or Delete Using VS Code
1. Open the Explorer panel in VS Code
2. Navigate to the root folder
3. Right-click on each file/folder listed above
4. Select "Delete" or press `Delete` key

## 🚀 Next Steps After Cleanup

### 1. Install Dependencies

```bash
cd c:\Users\HP\Desktop\items7
npm run install:all
```

This will:
- Install root dependencies (concurrently)
- Install frontend dependencies
- Install backend dependencies

### 2. Set Up Environment Files

**For Backend:**
The `.env` file has been copied to `backend/.env`. Verify it contains:
```env
MONGODB_URI=mongodb+srv://...
STRIPE_SECRET_KEY=sk_test_...
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

### 3. Start Development

**Option A: Both together (from root)**
```bash
npm run dev
```

**Option B: Separate terminals**
```bash
# Terminal 1: Frontend
cd frontend && npm run dev

# Terminal 2: Backend
cd backend && npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 📝 File Structure After Cleanup

After running all cleanup commands, your structure will look like:

```
items7/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── ... (other config files)
├── backend/
│   ├── server/
│   ├── api/
│   ├── package.json
│   ├── .env
│   └── .env.example
├── package.json (NEW - orchestration)
├── README.md (UPDATED)
├── STRUCTURE.md (NEW)
├── vercel.json
├── .env
├── .gitignore
└── ... (other config files)
```

## 🔗 Important Paths After Migration

### Import Paths (No Changes Needed)
- React imports work as-is
- CSS files use relative paths (no changes needed)
- Images referenced as `/images/filename.ext` (works from frontend/public)

### API Endpoints
- Frontend makes requests to `/api/*`
- Proxied to `http://localhost:5000` (dev)
- Production: Same domain `/api/*`

### Environment Variables
- Backend: `backend/.env`
- Frontend: Doesn't need env file (all API through proxy)

## ✨ Troubleshooting

### If Imports Break
- Verify `frontend/src/component/` contains all component files
- Check that all CSS files are in `frontend/src/`

### If API Calls Fail
- Ensure backend is running on port 5000
- Check `backend/.env` has correct MongoDB URI
- Verify `CORS_ORIGIN` in backend matches frontend URL

### If Images Don't Load
- Verify images are in `frontend/public/images/`
- Restart frontend dev server
- Check browser DevTools Network tab

## 📚 Documentation Files

- **README.md** - Main project documentation with setup instructions
- **STRUCTURE.md** - Detailed structure and organization guide
- **MIGRATION.md** - This file

## 🎯 Summary

Your project is now organized into a professional monorepo structure with:
✅ Clear separation of frontend and backend
✅ Proper dependency management
✅ Easy orchestration with NPM scripts
✅ Better scalability for future development
✅ Ready for deployment (Vercel, etc.)

---

**Next Action:** Run cleanup commands above, then `npm run install:all` and `npm run dev` to start development!
