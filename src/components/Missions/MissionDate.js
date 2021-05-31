import './MissionDate.css'

function MissionDate(date) {
    const month = date.date.toLocaleString('en-US', {month: 'long'});
    const day = date.date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.date.getFullYear();

    return(
    <div className="mission-date">
        <div className="mission-date__month">{month}</div>
        <div className="mission-date__day">{day.toString()}</div>
        <div className="mission-date__year">{year.toString()}</div>
    </div>
    );
}
export default MissionDate;
