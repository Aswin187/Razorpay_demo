import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://razorpay:dPNkJUUMFCJ7HpQH@cluster0.8f1vr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
    try {
        const DB = await mongoose.connect(MONGO_URI, {
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};

export default connectDB;


//dPNkJUUMFCJ7HpQH