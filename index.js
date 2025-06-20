import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import corsOptions from './corsConfig.js';

import transactionRoutes from './Routes/transactionRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import transferRoutes from './Routes/transferRoutes.js';
import softcodeRoutes from './Routes/softcodeRoutes.js';
import addExternalTransactionRoutes from './Routes/externalTransactionRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transfer', transferRoutes);
app.use('/api/softcode', softcodeRoutes);


// Routes
app.use('/api', addExternalTransactionRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Catch-All 404
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB connected'))
    .catch(error => console.error('❌ MongoDB connection error:', error));

// Server Start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
