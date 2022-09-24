const express = require('express');
const { 
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout 
} = require('../controllers/workoutController');
// const { update } = require('../models/workoutModel');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router