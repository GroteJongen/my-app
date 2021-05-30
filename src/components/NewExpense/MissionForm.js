import './MissionForm.css'
import {useState} from "react";

function MissionForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAirKills, setEnteredAirKills] = useState('');
    const [enteredGroundKills, setEnteredGroundKills] = useState('');
    const [enteredDeaths, setEnteredDeaths] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const airKillsHandler = (event) => {
        setEnteredAirKills(event.target.value)
    }

    const groundKillsHandler = (event) => {
        setEnteredGroundKills(event.target.value)
    }

    const deathsHandler = (event) => {
        setEnteredDeaths(event.target.value)
    }

    const clickHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            airKills: enteredAirKills,
            groundKills: enteredGroundKills,
            deaths: enteredDeaths,
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveMissionData(expenseData);
        clearData()

    }

    function clearData() {
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDeaths('')
        setEnteredGroundKills('')
        setEnteredAirKills('')
    }

    return (
        <form onSubmit={clickHandler}>
            <div className='new-mission__controls'>
                <div className='new-mission_control'>
                    <label>Title</label>
                    <input type='text'
                           onChange={titleChangeHandler}
                           value={enteredTitle}/>
                </div>
                <div className='new-mission__controls'>
                    <div className='new-mission_control'>
                        <label>Air kills</label>
                        <input type='number'
                               onChange={airKillsHandler}
                               value={enteredAirKills}/>
                    </div>
                </div>
                <div className='new-mission__controls'>
                    <div className='new-mission_control'>
                        <label>Ground kills</label>
                        <input type='number'
                               onChange={groundKillsHandler}
                               value={enteredGroundKills}/>
                    </div>
                </div>
                <div className='new-mission__controls'>
                    <div className='new-mission_control'>
                        <label>Deaths</label>
                        <input type='number'
                               onChange={deathsHandler}
                               value={enteredDeaths}/>
                    </div>
                </div>
                <div className='new-mission_control'>
                    <label>Amount</label>
                    <input type='number'
                           min="0.01"
                           step="0.01"
                           onChange={amountChangeHandler}
                           value={enteredAmount}/>
                </div>
                <div className='new-mission_control'>
                    <label>Date</label>
                    <input type='date'
                           min="2019-01-01"
                           max="2022-12-31"
                           onChange={dateChangeHandler}
                           value={enteredDate}/>
                </div>
                <div className='new-mission__actions'>
                    <button type='submit'>Add mission</button>
                    <button type="button" onClick={props.onStopAddingMission}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default MissionForm;