const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true }, // New: unique user ID
  password: { type: String, required: true },

  // Role can be Alumni or Fresher
  role: { type: String, enum: ["Alumni", "Fresher"], required: true },

  // Common
  branch: { type: String },

  // Alumni-specific
  passingYear: { type: Number },

  // Fresher-specific
  semester: { type: String },

  // Extra fields (optional profile info)
  bio: { type: String },
  linkedin: { type: String },
});

module.exports = mongoose.model("User", userSchema);
