
import express, { json } from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import { config as dotenvConfig } from 'dotenv';
import connect from './db/db.js';

dotenvConfig({ path: new URL('.', import.meta.url).pathname + '.env' });
const app = express();



// Add middleware for parsing JSON requests
app.use(json());

// Add middleware for enabling CORS
app.use(cors());

// Use the employee routes
app.use('/', employeeRoutes);

// Error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
