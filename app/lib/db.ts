import mongoose from 'mongoose';

const uri = process.env.DB_URI;

if (!uri) {
    throw new Error('Database connection URI is not defined');
}

export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
