import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.error('\n⚠️  Please ensure MongoDB is running or update MONGO_URI in backend/.env');
    console.error('   Option 1: Install MongoDB locally - https://www.mongodb.com/try/download/community');
    console.error('   Option 2: Use MongoDB Atlas (free) - https://www.mongodb.com/cloud/atlas/register');
    console.error('   Option 3: Run MongoDB in Docker: docker run -d -p 27017:27017 --name mongodb mongo\n');
    process.exit(1);
  }
};

export default connectDB;
