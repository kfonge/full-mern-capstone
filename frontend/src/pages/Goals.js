import axios from "axios";

import { useEffect, useRef, useState } from "react";

import goalService from '../services/goalService'

function Goals ({ user }) {

    const [goals, setGoals] = useState([])

    let notesRef = useRef()

    const getAllGoals = async () => {

        try {
            
            const response = await goalService.index()

            setGoals(response.data.goals)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllgoals()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        let newGoal = {
            notes: notesRef.current.value,
            user
        }

        try {

            const response = await goalService.add(newGoal)

            setGoals([...goals, response.data.goal])
            notesRef.current.value = ''

        } catch (error) {
            console.log(error)
        }

        
    }

    return ( 
        <div>
            <h1>Goals</h1>

            <ol style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                padding: '20px'
            }}>
                {goals.map(t => 
                    <li key={t._id}> {t.notes}</li>
                )}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={notesRef} /><br /><br />
                <button>Add Goal</button>
            </form>
        </div>
    );
}

export default Goals ;