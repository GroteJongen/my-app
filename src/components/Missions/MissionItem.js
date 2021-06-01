import './MissionItem.css'
import './MissionDate'
import MissionDate from "./MissionDate";
import {useState} from "react";


function MissionItem(props) {

    const [tittleToDelete, setTitleToDelete] = useState(props);

    const onDeleteHandler = () => {
        setTitleToDelete(props)
        props.onDeleteHandler(props)
        console.log(props)
    }

    return (
        <div className="mission-item">
            <MissionDate date={props.date}/>
            <div className="mission-item__description">
                <h2>{props.title}</h2>
                <h2>Air kills: {props.airKills}</h2>
                <h2 className>Ground kills: {props.groundKills}</h2>
                <h2 className>Deaths: {props.deaths}</h2>
                <div className="mission-item__score">Score: {props.score}</div>
            </div>
            <div>
                <button onClick={onDeleteHandler}>Delete</button>
            </div>
        </div>);
}


export default MissionItem;