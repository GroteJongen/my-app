
import './App.css';
import Missions from "./components/Missions/Missions";
import Card from "./components/Ui/Card";
import NewMission from "./components/NewMission/NewMission";
import {useState} from "react";

const DUMMY_MISSIONS = [
    {
        airKills:3,
        groundKills:3,
        deaths:0,
        title: 'Stormy storm',
        score: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        airKills:5,
        groundKills:1,
        deaths:2,
        title: 'Mountains storm',
        score: 799.49,
        date: new Date(2021, 2, 12)},
    {
        airKills:4,
        groundKills:1,
        deaths:0,
        title: 'Plains Storm',
        score: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        airKills:0,
        groundKills:4,
        deaths:5,
        title: 'Desert Storm',
        score: 450,
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const [missions,setMissions] = useState(DUMMY_MISSIONS);

    const addMissionHandler = mission => {
        setMissions(prevMissions =>{
            return [mission,...prevMissions];
        });
    };

    return (
        <Card>
            <NewMission onAddMision={addMissionHandler}/>
         <Missions items={missions}/>
        </Card>
    );
}

export default App;
