const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Optional middleware if created
const logger = require("./middleware/logger");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
if (logger) app.use(logger);

// Routes
const alumniRoutes = require("./routes/alumniRoutes");
app.use("/api/alumni", alumniRoutes);

// NEW: Auth routes (register/login)
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
