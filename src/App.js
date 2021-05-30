
import './App.css';
import Missions from "./components/Expenses/Missions";
import Card from "./components/Ui/Card";
import NewMission from "./components/NewExpense/NewMission";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        airKills:3,
        groundKills:3,
        deaths:0,
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        airKills:5,
        groundKills:1,
        deaths:2,
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)},
    {
        airKills:4,
        groundKills:1,
        deaths:0,
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        airKills:0,
        groundKills:4,
        deaths:5,
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        console.log(expense)
        setExpenses(prevExpenses =>{
            return [expense,...prevExpenses];
        });
    };

    return (
        <Card>
            <NewMission onAddMision={addExpenseHandler}/>
         <Missions items={expenses}/>
        </Card>
    );
}

export default App;
