const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ============================
// Alumni Register
// ============================
router.post("/register/alumni", async (req, res) => {
  const { name, email, userId, password, branch, passingYear } = req.body;

  try {
    // Check if email or userId already exists
    const existingUser = await User.findOne({ $or: [{ email }, { userId }] });
    if (existingUser) {
      return res.status(400).json({ msg: "Email or User ID already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      userId,
      password: hashedPassword,
      branch,
      passingYear,
      role: "Alumni",
    });

    await newUser.save();
    res.status(201).json({ msg: "Alumni registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================
// Fresher Register
// ============================
router.post("/register/fresher", async (req, res) => {
  const { name, email, userId, password, branch, semester } = req.body;

  try {
    // Check if email or userId already exists
    const existingUser = await User.findOne({ $or: [{ email }, { userId }] });
    if (existingUser) {
      return res.status(400).json({ msg: "Email or User ID already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      userId,
      password: hashedPassword,
      branch,
      semester,
      role: "Fresher",
    });

    await newUser.save();
    res.status(201).json({ msg: "Fresher registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================
// Login (email or userId)
// ============================
router.post("/login", async (req, res) => {
  const { login, password } = req.body; // login can be email OR userId

  try {
    // Find user by email or userId
    const user = await User.findOne({
      $or: [{ email: login }, { userId: login }],
    });

    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Generate JWT token (expires in 1h)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secret_key",
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
        userId: user.userId,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
