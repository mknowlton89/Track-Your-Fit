const router = require("express").Router();
const { User, Workout } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newIndividWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newIndividWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: "No workouts found with this id!" });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {

    const workoutData = await Workout.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const workout = workoutData.get({ plain: true });

    res.render("individual-workout", {
      ...workout, 
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;





