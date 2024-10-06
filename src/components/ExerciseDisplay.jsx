import Navbar from "./Navbar";
import Form from './Form'

export default function ExerciseDisplay({ exercise }) {
    console.log(exercise);

    function Card() {
      return (
        <div className="card">
          {exercise}
        </div>
      )

    }

    return (
      <>

      
          <h1>{exercise.name}</h1>
          <h2>{exercise.difficulty}</h2>
          <h2>{exercise.muscle}</h2>
          <h2>{exercise.type}</h2>
          <h3>{exercise.instructions}</h3>
          <button type ="submit">
          See Image
        </button>
        

    
      </>

          
    )};    

    