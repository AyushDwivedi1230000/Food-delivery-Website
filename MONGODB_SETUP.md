# MongoDB Setup for Food Delivery App 1

This app requires MongoDB to run. You have 3 options:

## Option 1: MongoDB Atlas (Cloud - Recommended for Quick Start)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (M0 Free tier)
4. Create a database user
5. Get your connection string
6. Update `backend/.env` with your connection string:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/food-delivery?retryWrites=true&w=majority
   ```

## Option 2: Docker (Easiest if Docker is installed)

Run MongoDB in Docker:
```powershell
docker run -d -p 27017:27017 --name mongodb-food-delivery mongo:latest
```

The `.env` file is already configured for this option:
```
MONGO_URI=mongodb://localhost:27017/food-delivery
```

## Option 3: Local Installation

### Windows
1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Install MongoDB Community Server
3. Start MongoDB service:
   ```powershell
   net start MongoDB
   ```

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux
```bash
sudo apt-get install mongodb-org
sudo systemctl start mongod
```

## Testing MongoDB Connection

After setup, test if MongoDB is running:

```powershell
# Try connecting (if using local MongoDB)
mongosh

# Or check if the port is listening
netstat -an | findstr 27017
```

## Running the App

Once MongoDB is set up:

```powershell
# From the root directory
npm run dev
```

This will start:
- Backend API on http://localhost:5000
- Frontend on http://localhost:5174

## Troubleshooting

### Connection Refused
- Ensure MongoDB is running
- Check MONGO_URI in backend/.env
- For Atlas: Whitelist your IP address in Atlas Network Access

### Authentication Failed  
- Verify username/password in connection string
- For Atlas: Check database user credentials

### Network Timeout
- For Atlas: Check your internet connection
- Add your IP to Atlas Network Access whitelist (or use 0.0.0.0/0 for allow all)
