const express = require('express');
const { getAllResumes, createResume } = require('../controllers/resumeController');

const router = express.Router();

router.get('/', getAllResumes);
router.post('/', createResume);

module.exports = router;
