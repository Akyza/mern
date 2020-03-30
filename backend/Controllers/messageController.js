import mongoose from 'mongoose';
import messageSchema from '../Models/messageModel';
import userSchema from '../Models/userModel';

const Message = mongoose.model('Message', messageSchema);
const User = mongoose.model('User', userSchema);

export const add = async (req, res) => {
    let user = await User.findOne({ 'userName': req.body.userName });
};
