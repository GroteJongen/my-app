import './NewMission.css'
import './MissionForm.css'
import MissionForm from "./MissionForm";
import {useState} from "react";

function NewMission(prop) {
    const [isEditing, setIsEditing] = useState(false);
    const saveMissionDataHandler = (enteredMissionData) => {
        const missionsData = {
            ...enteredMissionData,
            id: Math.random().toString()
        };
        prop.onAddMision(missionsData);
        setIsEditing(false);
    }

    const showTheForm = () => {
        setIsEditing(true)
    }

    const hideTheForm = () =>{
        setIsEditing(false)
    }

    if (isEditing === true) {
        return (<div className='new-mission'><MissionForm onSaveMissionData={saveMissionDataHandler} onStopAddingMission={hideTheForm}/></div>)
    }
    if (isEditing === false) {
        return (
                <div className='new-mission'>
                    <button onClick={showTheForm}>Add new mission</button>
                </div>
        )
    }
}

export default NewMission;