import { useState, useEffect } from 'react'
import "./App.css";

import ExercisesAPI from './components/Exercise-api';

import Form from './components/Form';

import ExerciseDisplay from './components/ExerciseDisplay' 
//import Carousel from './components/Carousel.js'


export default function App() {

return(
  <div>
    <ExercisesAPI/>
    
  </div>
)
}
