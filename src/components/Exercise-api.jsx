import React, { useEffect, useState } from "react";
import ExerciseDisplay from "./ExerciseDisplay";


const API_KEY = 'Sj6aIM7Hqi7yHL5HoxT4WQ==Mx2Z2Js9gPiWpprm'

export default function ExercisesAPI() {
  const [exercise, setExercise] = useState([])

  const Workouts = async () => {

    const res = await fetch(
        `https://api.api-ninjas.com/v1/exercises`,
        {
          headers: { "x-api-key": API_KEY },
        },
      );
    
      const exercisesData = await res.json();
      console.log(exercisesData);
      setExercise(exercisesData)
      return exercisesData
    }

    useEffect(()=>{
      Workouts()
    },[])
      return(
        <div>
        {exercise.length > 0? 
        
          <div>
            {exercise.map((exerciseData, index) => {
            return <ExerciseDisplay exercise={exerciseData} key={exercise.index}/>
})} 
            </div> : <div>Loading</div>
        }
               </div>
      )
}


    // const request = require('request');
    // var muscle = 'biceps';
    // request.get({
    //   url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    //   headers: {
    //     'X-Api-Key': 'YOUR_API_KEY'
    //   },
    // }, function(error, response, body) {
    //   if(error) return console.error('Request failed:', error);
    //   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    //   else console.log(body)
    // });
    

//     constructor(httpClient){
//         this.httpClient = httpClient;
//     }

//     async getStarships(){
//         try {
//             const response = await fetch('');
    
//             if (!response.ok) {
//                 throw new Error('Does not exist');
//             }
    
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('error', error);
//     }
// }

//  muscle = 'biceps'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//     headers: { 'X-Api-Key': 'YSj6aIM7Hqi7yHL5HoxT4WQ==Mx2Z2Js9gPiWpprm '},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// const res = await fetch(
//     `https://api.api-ninjas.com/v1/exercises`,
//     {
//       headers: { "x-api-key": API_KEY },
//     },
//   );

//   const exercisesData = await res.json();
//   console.log(exercisesData);