const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
     title: {
         type: String,
         required: true,
         trim: true,
     },
     story: {
         type: String,
         required: true,
         trim: true
     },
     name: {
         type: String,
         required: true,
         trim: true
     },
     genre: {
         type: String,
         required: true,
         trim: true
     }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User',UserSchema);

module.exports = User;