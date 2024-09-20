import { useState, useRef, useEffect } from 'react';
import Introduction from './components/Introduction'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {

  const [workout, setWorkout] = useState(null)
  const [type, setType] = useState("individual")
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState("strength_power")

  const workoutRef = useRef(null);

  function updateWorkout(){
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({type, muscles, goal})
    setWorkout(newWorkout)
  }

  // Scroll to the workout section once it's generated and rendered
  useEffect(() => {
    if (workout && workoutRef.current) {
      workoutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [workout]);

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r 
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Introduction />
      <Generator 
      type = {type}
      setType = {setType}
      muscles = {muscles}
      setMuscles = {setMuscles}
      goal = {goal}
      setGoal = {setGoal}
      updateWorkout = {updateWorkout}
      />
      {workout && (
        <div id="workout" ref={workoutRef}>
          <Workout workout={workout} />
      </div>
      )}
    </main>
  )
}

export default App
