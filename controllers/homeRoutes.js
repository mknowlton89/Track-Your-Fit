const router = require("express").Router();
const { User, Workout, WorkoutHistory } = require("../models");
const withAuth = require("../utils/auth");

// TODO: Add the homepage route here (So when you go to localhost:3001/ it renders the homepage)
router.get("/", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  // console.log(req.session);

  const userData = await User.findOne({ where: { id: req.session.user_id } });

  const user = userData.get({ plain: true });


  res.render("homepage", {
    loggedIn: req.session.logged_in,
    user
  });
});

// TODO: Add the login route here (So when you go to localhost:3001/login it renders the login)
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/allworkouts", async (req, res) => {
  try {
    if (req.session.logged_in !== true) {
      res.redirect("/login");
      return;
    }

    const workoutData = await Workout.findAll();

    // console.log(req.session.logged_in);
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render("all-workouts", {
      workouts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Add the workouts page here (So when you go to localhost:3001/workouts it renders the workouts page)
router.get("/createworkout", (req, res) => {
  if (req.session.logged_in !== true) {
    res.redirect("/login");
    return;
  }

  res.render("createworkout", {
    loggedIn: req.session.logged_in,
  });
});
module.exports = router;
