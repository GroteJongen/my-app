import {useState} from "react";

function TotalResults(missions) {
    const [currentTotalResults, setTotalResults] = useState(init)

    function init(){
        let totalAirKills = 0;
        let totalGroundKills = 0;
        let totalDeaths = 0;
        let totalMissions = missions.missions.length
        let totalScore = 0;

        for (let i = 0; i < missions.missions.length; i++) {
            totalAirKills += parseInt(missions.missions[i].airKills);
            totalGroundKills += parseInt(missions.missions[i].groundKills);
            totalDeaths += parseInt(missions.missions[i].deaths);
            totalScore += parseInt(missions.missions[i].score);
        }
        return  {
            totalAirKills: totalAirKills,
            totalGroundKills: totalGroundKills,
            totalDeaths: totalDeaths,
            totalMissions: totalMissions,
            totalScore: totalScore,

        }

    }

    function calculateTotal() {

        let totalAirKills = 0;
        let totalGroundKills = 0;
        let totalDeaths = 0;
        let totalMissions = missions.missions.length
        let totalScore = 0;

        for (let i = 0; i < missions.missions.length; i++) {
            totalAirKills += parseFloat(missions.missions[i].airKills);
            totalGroundKills += parseFloat(missions.missions[i].groundKills);
            totalDeaths += parseFloat(missions.missions[i].deaths);
            totalScore += parseFloat(missions.missions[i].score);
        }
        const totalResults = {
            totalAirKills: totalAirKills,
            totalGroundKills: totalGroundKills,
            totalDeaths: totalDeaths,
            totalMissions: totalMissions,
            totalScore: totalScore,

        }
        setTotalResults(totalResults)
    }

    function calculateRatios() {
        const newTotalMission = {
            totalAirKills: (currentTotalResults.totalAirKills / currentTotalResults.totalMissions).toFixed(2),
            totalGroundKills: (currentTotalResults.totalGroundKills / currentTotalResults.totalMissions).toFixed(2),
            totalDeaths: (currentTotalResults.totalDeaths / currentTotalResults.totalMissions).toFixed(2),
            totalScore: (currentTotalResults.totalScore / currentTotalResults.totalMissions).toFixed(2)

        }
        setTotalResults(newTotalMission)
    }


    return (
        <div>
            <button onClick={missions.onStopCheckingTotal}>Go back</button>
            <button onClick={calculateRatios}>Show ratios</button>
            <button onClick={calculateTotal}>Show standard</button>
            <div className="mission-item">
                <div className="mission-item__description">
                    <h2>Air kills: {currentTotalResults.totalAirKills}</h2>
                    <h2 className>Ground kills: {currentTotalResults.totalAirKills}</h2>
                    <h2 className>Deaths: {currentTotalResults.totalDeaths}</h2>
                    <h2 className>Total missions: {currentTotalResults.totalMissions}</h2>
                    <div className="mission-item__score">Score: {currentTotalResults.totalScore}</div>
                </div>
            </div>
        </div>
    );
}

export default TotalResults;