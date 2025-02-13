const Resume = require('../models/Resume');

// @desc   Get all resumes
// @route  GET /api/resumes
const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resumes' });
  }
};

// @desc   Create a new resume
// @route  POST /api/resumes
const createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create resume' });
  }
};

module.exports = { getAllResumes, createResume };
