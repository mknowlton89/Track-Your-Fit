const router = require("express").Router();

const userRoutes = require("./user-routes");
const createWorkoutRoutes = require("./createworkout-routes");
const workoutRoutes = require("./individual-workout-routes");

router.use("/users", userRoutes);
router.use("/createdworkouts", createWorkoutRoutes);

router.use("/workouts", workoutRoutes);

module.exports = router;
