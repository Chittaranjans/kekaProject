import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './model/user.model.js';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// Assuming MongoDBURI is stored in an environment variable now
const MongoDBURI = process.env.MongoDBURI;

async function connectDB() {
  try {
    await mongoose.connect(MongoDBURI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}


connectDB();
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});