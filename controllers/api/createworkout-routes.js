const router = require("express").Router();
const { User, Workout } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  const userData = await Workout.create(req.body);
  res.json(userData);
});

module.exports = router;
