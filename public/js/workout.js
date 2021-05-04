

const deleteButton = document.getElementById("delete-btn");
const workoutId = document.getElementById("workout-id");

console.log(workoutId.value);

const newFormHandler = async (event) => {
  event.preventDefault();

  if (workoutId.value) {
    const response = await fetch(`/api/workouts/${workoutId.value}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/api/users/workouts');
    } else {
      alert('Workout could not delete!');
    }
  }
};

deleteButton.addEventListener("click", newFormHandler);




