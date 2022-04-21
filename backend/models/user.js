import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    city: {type: String},
    dateOfBith: {type: Date},
    about: {type: String},
    favorites: [{
        type: String
    }],
    orders: [{
        type: String
    }],
    id: {type: String}
});

const User = mongoose.model('User', userSchema);

export default User;