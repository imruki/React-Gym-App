import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import {SCHEMES, WORKOUTS} from '../utils/workouts'
import Button from './Button'
import { generateWorkout } from '../utils/functions'
function Header(props){
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const {type, setType, muscles, setMuscles, goal, setGoal, updateWorkout} = props
    
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => setShowModal(!showModal)
    const updateMuscles = (muscleGroup) => {
        if (muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }
        if (type !== "individual") {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
        
        setMuscles([...muscles, muscleGroup])

        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper header={"generate your workout"} title={["it\'s", "Huge", "o\'clock"]}> 
            <Header index={"01"} title={"Pick your poison"} description={"Select the workout you wish to endure."}/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((workoutType, workoutIndex) => {
                    return (
                        <button onClick={() => {setType(workoutType);setMuscles([])}} key={workoutIndex} className={'bg-slate-950 border border-blue-400 duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (workoutType === type ? " border-blue-600" : "border-blue-400")}>
                            <p className='capitalize'>{workoutType.replaceAll("_"," ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={"02"} title={"Lock on targets"} description={"Select the muscles judged for annihilation."}/>
            <div className='bg-slate-950 border border-solid border-blue-400 rounded-l flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3'>
                        {(type === "individual" ? WORKOUTS[type] : Object.keys(WORKOUTS[type])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={()=>{updateMuscles(muscleGroup)}} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? " text-blue-400" : "")} key={muscleGroupIndex}>
                                    <p className='uppercase'>{muscleGroup.replaceAll("_", " ")}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={"03"} title={"Become Juggernaut"} description={"Select your ultimate objectif."}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {setGoal(scheme)}} key={schemeIndex} className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 px-4 py-3 rounded-lg ' + (scheme === goal ? " border-blue-600" : "border-blue-400")}>
                            <p className='capitalize'>{scheme.replaceAll("_"," ")}</p>
                        </button>
                    )
                })}
            </div>

            <Button func={updateWorkout} text='Generate Workout'/>
        </SectionWrapper>
    )
}
