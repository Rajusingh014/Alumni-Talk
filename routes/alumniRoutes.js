// server/routes/alumniRoutes.js

const express = require('express');
const router = express.Router();

// Import controller functions
const { getAllAlumni, addAlumni } = require('../controllers/alumniController');

// GET all alumni talks
router.get('/', getAllAlumni);

// POST a new alumni talk
router.post('/', addAlumni);

module.exports = router;
