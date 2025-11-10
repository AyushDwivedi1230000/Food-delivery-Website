# FoodFlow - Setup & Deployment Guide

## Quick Start

### Prerequisites
- Node.js v16+
- MongoDB running locally
- npm or yarn

### Local Development

1. **Install Dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Backend and frontend dependencies are separate
   # They will be installed automatically during npm install
   ```

2. **Configure Environment Variables**
   
   Backend (backend/.env):
   ```
   MONGO_URI=mongodb://localhost:27017/food-delivery
   JWT_SECRET=your_jwt_secret_key_change_in_production
   JWT_EXPIRES=7d
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```
   
   Frontend (frontend/.env):
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Start MongoDB**
   ```bash
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

4. **Seed Database (Optional)**
   ```bash
   npm run seed
   ```
   This creates 5 sample restaurants with menu items.

5. **Start Development Servers**
   ```bash
   npm run dev
   ```
   This starts both frontend and backend concurrently:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## Project Structure

```
food-delivery-app/
├── backend/                 # Express server
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── seed.js
│   └── package.json
├── frontend/                # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.tsx
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── README.md
└── POSTMAN_COLLECTION.json
```

## Testing Credentials

After signup, use any email/password combination:
- Email: test@example.com
- Password: password123

## API Endpoints

### Authentication
- **POST /api/auth/signup**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
  Response: `{ user: {...}, token: "JWT_TOKEN" }`

- **POST /api/auth/login**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
  Response: `{ user: {...}, token: "JWT_TOKEN" }`

- **GET /api/auth/me**
  Headers: `Authorization: Bearer JWT_TOKEN`
  Response: `{ id, name, email, address }`

### Restaurants (Public)
- **GET /api/restaurants**
  Response: Array of restaurants

- **GET /api/restaurants/:id**
  Response: Single restaurant with menu items

## Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variable:
   - `VITE_API_URL` → Your backend API URL
4. Deploy

### Backend (Render)

1. Create new service on Render
2. Connect GitHub repository
3. Set environment variables:
   - `MONGO_URI` → MongoDB Atlas connection
   - `JWT_SECRET` → Your secret key
   - `FRONTEND_URL` → Your Vercel URL
4. Build command: `npm install`
5. Start command: `node server.js`

## Key Features Implemented

✅ User authentication with JWT
✅ Password hashing with bcrypt
✅ Protected routes
✅ Restaurant browsing with search
✅ Restaurant details and menus
✅ Dark-themed responsive UI
✅ Microanimations and transitions
✅ Error handling and validation
✅ CORS enabled
✅ Input validation

## Future Enhancements

- Shopping cart functionality
- Order management
- Stripe payment integration
- Real-time order tracking (Socket.io)
- Admin dashboard
- User reviews and ratings
- Order history
- Favorite restaurants

## Troubleshooting

### "Cannot connect to MongoDB"
- Ensure MongoDB is running
- Check MONGO_URI matches your setup
- Try: `mongosh` to verify connection

### "CORS Error"
- Verify FRONTEND_URL in backend .env
- Check VITE_API_URL in frontend .env
- Clear browser cache and localStorage

### "Port already in use"
- Backend: Change PORT in .env
- Frontend: `npx vite --port 3000`

### "Token not working"
- Clear localStorage: `localStorage.clear()`
- Re-login
- Verify JWT_SECRET is consistent

## Production Build

```bash
# Build frontend
npm run build

# Output: frontend/dist/

# Deploy dist/ folder to Vercel or similar
```

## Support

For issues:
1. Check MongoDB is running
2. Review .env files
3. Clear browser cache
4. Check browser console for errors
5. Review backend logs with: `NODE_ENV=development npm run dev`

---

Happy coding! 🍕
