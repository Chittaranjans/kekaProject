import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './route/user.route.js';

const app = express();

app.use(express.json());
app.use(cors());

// Error handling middleware for parsing JSON
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     console.error('Bad JSON');
//     return res.status(400).send({ message: 'Bad JSON' }); // Bad JSON
//   }
//   next();
// });

app.use((err, req, res, next) => {
  console.error('Error caught by middleware:', err);
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ message: 'Bad JSON' });
  }
  res.status(500).send({ message: 'Internal Server Error' });
});

// Step 5: Adding a simplified test route
app.get('/get', (req, res) => {
  res.send({ message: 'Test route works' });
});

dotenv.config();
const PORT = process.env.PORT || 3001;

// Assuming MongoDBURI is stored in an environment variable now
const MongoDBURI = process.env.MongoDBURI;

// app.use(express.json());
app.use('/signup', userRouter);
app.use('/get', userRouter);

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