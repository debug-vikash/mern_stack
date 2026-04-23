// const users = [
//     {
//         "id": "1",
//         "name": "John Doe",
//     },
//     {
//         "id": "2",
//         "name": "Jane Smith",
//     },
//     {
//         "id": "3",
//         "name": "Alice Johnson",
//     }
// ];

import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean
});

usersSchema.pre('save', function(next) {
    console.log('A user is about to be saved:', this);
    next();
});

usersSchema.post('saveUpdate', function() {
    console.log('A user has been Updated:');
});


const User = mongoose.model('User', usersSchema);


export default User

