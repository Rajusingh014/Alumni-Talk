// server/controllers/alumniController.js

let alumni = [
  { id: 1, name: 'Ravi Kumar', year: 2019, talk: 'My journey from college to Infosys.' },
  { id: 2, name: 'Priya Singh', year: 2020, talk: 'Cracking TCS NQT and my preparation strategy.' }
];

// GET all alumni
const getAllAlumni = (req, res) => {
  res.json(alumni);
};

// POST new alumni
const addAlumni = (req, res) => {
  const { name, year, talk } = req.body;

  if (!name || !year || !talk) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const newAlumnus = {
    id: alumni.length + 1,
    name,
    year,
    talk
  };

  alumni.push(newAlumnus);
  res.status(201).json(newAlumnus);
};

module.exports = { getAllAlumni, addAlumni };
