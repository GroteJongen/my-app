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
    const [isSearchingMission, setIsSearchingMission] = useState(false);
    const [missionName, setMissionName] = useState('');
    const onPickedDate = (filteredValue) => {
        setFilteredYear(filteredValue)
    }
    const filteredMissions = missions.items.filter(mission => {
        return mission.date.getFullYear().toString() === filteredYear;
    })

    const foundMissions = filterHandler();

    function filterHandler(event) {
        return missions.items.filter(mission => {
            return mission.title === missionName;
        })
    }


    const onSearchingByName = event => {
        setMissionName(event.target.value);
    }

    const onDeleteHandler = title => {
        missions.onDeleteMission(title)
    }

    const onTotalHandler = () => {
        setIsCheckingTotal(true);
    }

    const onListHandler = () => {
        setIsCheckingTotal(false)
    }

    const onSearchHandler = (event) => {
        event.preventDefault()
        setIsSearchingMission(true)
    }
    const onStopSearchingHandler = (event) => {
        event.preventDefault()
        setIsSearchingMission(false)
    }


    return (
        <Card className="missions">
            <button onClick={onTotalHandler}>Get total</button>
            <div className='new-mission_search__controls'>
                <form onSubmit={filterHandler} >
                    <div className='new-mission_control'>
                        <label>Title</label>
                        <input type='text' onChange={onSearchingByName}/>
                        <button type="submit" onClick={onSearchHandler}>Search</button>
                        <button type="submit" onClick={onStopSearchingHandler}>Cancel</button>
                    </div>
                </form>
            </div>
            <MissionsFilter selected={filteredYear} onPickedDate={onPickedDate}/>
            <MissionsChart missions={filteredMissions}/>
            {isCheckingTotal === true ?
                <TotalResults missions={filteredMissions} onStopCheckingTotal={onListHandler}/> :
                isSearchingMission === true ? <MissionsList items={foundMissions} onDelete={onDeleteHandler}/> :
                    <MissionsList items={filteredMissions} onDelete={onDeleteHandler}/>}
        </Card>
    );

}

export default Missions;