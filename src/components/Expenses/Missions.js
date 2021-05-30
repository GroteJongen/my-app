import './MissionItem'
import './Missions.css'
import Card from "../Ui/Card";
import MissionsFilter from "./MissionsFilter";
import {useState} from "react";
import MissionsList from "./MissionsList";
import MissionsChart  from "./MissionsChart";

function Missions(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const onPickedDate = (filteredValue) => {
        setFilteredYear(filteredValue)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <Card className="missions">
            <MissionsFilter selected={filteredYear} onPickedDate={onPickedDate}/>
            <MissionsChart expenses={filteredExpenses}/>
          <MissionsList items={filteredExpenses}/>
        </Card>
    );

}

export default Missions;