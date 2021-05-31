import MissionItem from "./MissionItem";
import './MissionsList.css'

const MissionsList = props => {
    if(props.items.length === 0 ) {
       return <h2 className='missions-list__fallback'>Found no missions.</h2>
    }
    return <ul className='missions-list'>
        {props.items.map((mission) => (
        <MissionItem
            key={mission.id}
            title={mission.title}
            amount={mission.score}
            date={mission.date}
            airKills={mission.airKills}
            groundKills={mission.groundKills}
            deaths={mission.deaths}
        />))};
    </ul>
}

export default MissionsList