import mongoose from 'mongoose';
import userSchema from '../Models/user';

const User = mongoose.model('User', userSchema);

export const getall = async (req, res => {
    const users = await User.find().populate('messages');
    res.json(users);
});
