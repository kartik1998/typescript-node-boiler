import mongoose from 'mongoose';

const DefaultSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', DefaultSchema, 'user');

export default User;
