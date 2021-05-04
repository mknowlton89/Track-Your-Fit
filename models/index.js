const User = require("./User");
const Workout = require("./Workout");
// const WorkoutHistory = require("./WorkoutHistory");

User.hasMany(Workout, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Workout.belongsTo(User, {
  foreignKey: "owner_id",
});

// User.belongsToMany(WorkoutHistory, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
//   through: "UserWorkoutHistory",
// });

// WorkoutHistory.belongsToMany(User, {
//   foreignKey: "user_id",
//   through: "UserWorkoutHistory",
//   onDelete: "CASCADE",
// });

// Workout.belongsToMany(WorkoutHistory, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });

// WorkoutHistory.hasMany(Workout, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });

module.exports = { User, Workout };
