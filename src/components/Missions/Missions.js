import './MissionItem'
import './Missions.css'
import '../NewMission/NewMission.css'
import Card from "../Ui/Card";
import MissionsFilter from "./MissionsFilter";
import {useState} from "react";
import MissionsList from "./MissionsList";
import MissionsChart from "./MissionsChart";
import TotalResults from "./TotalResults";

function Missions(missions) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const [isCheckingTotal, setIsCheckingTotal] = useState(false);
    const onPickedDate = (filteredValue) => {
        setFilteredYear(filteredValue)
    }
    const filteredMissions = missions.items.filter(mission => {
        return mission.date.getFullYear().toString() === filteredYear;
    })



    const onTotalHandler = () => {
        setIsCheckingTotal(true);
    }

    const onListHandler = () =>{
        setIsCheckingTotal(false)
    }

    return (
        <Card className="missions">
            <button onClick={onTotalHandler}>Get total</button>
            <MissionsFilter selected={filteredYear} onPickedDate={onPickedDate}/>
            <MissionsChart missions={filteredMissions}/>
            {isCheckingTotal === true ?
                <TotalResults missions={filteredMissions} onStopCheckingTotal={onListHandler}/> :
                <MissionsList items={filteredMissions}/>}
        </Card>
    );

}

export default Missions;