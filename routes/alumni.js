const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

// POST route
router.post('/', async (req, res) => {
  try {
    const { name, year, talk, role, branch } = req.body;
    const newTalk = new Alumni({ name, year, talk, role, branch });
    await newTalk.save();
    res.status(201).json(newTalk);
  } catch (error) {
    console.error('Error creating talk:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route
router.get('/', async (req, res) => {
  try {
    const { role, branch } = req.query;
    const filter = {};
    if (role) filter.role = role;
    if (branch) filter.branch = branch;

    const talks = await Alumni.find(filter);
    res.json(talks);
  } catch (error) {
    console.error('Error fetching talks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
