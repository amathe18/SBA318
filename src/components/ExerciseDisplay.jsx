

export default function ExerciseDisplay({ exercise }) {
    console.log(exercise);

    return (
        <>
          <h1>{exercise.name}</h1>
          <h2>{exercise.type}</h2>
          <h2>{exercise.instructions}</h2>
            <h3>{exercise.muscle}</h3>
          <h2>{exercise.difficulty}</h2>
        </>
    )};    