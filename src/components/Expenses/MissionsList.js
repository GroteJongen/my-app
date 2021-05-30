import MissionItem from "./MissionItem";
import './MissionsList.css'

const MissionsList = props => {
    if(props.items.length === 0 ) {
       return <h2 className='missions-list__fallback'>Found no missions.</h2>
    }
    return <ul className='missions-list'>
        {props.items.map((expense) => (
        <MissionItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            airKills={expense.airKills}
            groundKills={expense.groundKills}
            deaths={expense.deaths}
        />))};
    </ul>
}

export default MissionsList