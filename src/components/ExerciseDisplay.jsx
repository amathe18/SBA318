

export default function ExerciseDisplay({ exercise }) {
    console.log(exercise);

    return (
        <>
          <h1>{exercise.name}</h1>
          <h2>{exercise.type}</h2>
          <img src={exercise.image} alt={exercise.muscle} />
          <h2>{exercise.difficulty}</h2>
        </>
    )};    