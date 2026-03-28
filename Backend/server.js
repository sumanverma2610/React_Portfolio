import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from './routes/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount root router
app.use('/api', rootRouter);

// Root
app.get('/', (req, res) => res.send('API is running'));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));