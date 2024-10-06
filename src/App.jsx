import { useState, useEffect } from 'react'
import "./App.css";

import ExercisesAPI from './components/Exercise-api';

import Form from './components/Form';

import ExerciseDisplay from './components/ExerciseDisplay' 
//import Carousel from './components/Carousel.js'

import Navbar from './components/Navbar';


export default function App() {

const Card = ({ExerciseDisplay})  

return(
  <>
  <div>
    <ExercisesAPI/>
     {/* <div className="App">
      <Form search = {}/>
      {exercise?<ExerciseDisplay exercise={exercise} />: <h1>No Movie to Display</h1>} */}


    </div> 

  </>  

)}
