'use strict';
import mongoose, { Mongoose } from "mongoose";
import bcrypt from "bcryptjs"

/**
 * User Schema
 */
var UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  hash_password: {
    type: String
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  created: {
    type: Date,
    default: Date.now
  }
}, { collection: "users", timestamps: true });

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

export default UserSchema


// mongoose.model('User', UserSchema);