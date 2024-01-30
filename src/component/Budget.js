import { useSelector, useDispatch } from "react-redux"
import { change_curr, change_budget } from "../store/actions";
function Budget(){
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    // calcualte spent    
    const spent = state.expenses.reduce((total, item)=>{
            return (total += item.budget)
        } ,0)
    // calculate remaining
    const remain = state.budget - spent
    // change currency
    const chnageBudget = (e) => {
        if(parseInt(e.target.value) >= spent && parseInt(e.target.value) <= 20000){
            dispatch(change_budget(parseInt(e.target.value)))
        }else if(parseInt(e.target.value) > 20000){
            alert("the value cannot exceed the remaining funds " + state.currency + remain );
            e.target.value = state.budget
        }
        else{
            alert("Can't reduce badget at this situation!")
            e.target.value = state.budget;
        }
    }
    return (
        <div className="row">
            <h1 className="mt-2">Company's Budget Allocation</h1>
            <div className="col m-2 alert alert-secondary">
                Budget : {state.currency}
                <input type="number" step="10" defaultValue={state.budget} onChange={chnageBudget} />
            </div>
            <div className="col m-2 alert alert-success">
                Remaining : {state.currency}{remain}
            </div>
            <div className="col m-2 alert alert-primary">
                Spent so far : {state.currency}{spent}
            </div>
            <div className="col m-2">
                <button className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">{`Currency (${state.currency} ${state.currencies[state.currency]})`}</button>
                <ul className="dropdown-menu bg-success text-white">
                    {Object.entries(state.currencies).map(([key, value])=>(
                        <li className="dropdown-item" key={key} value={key} onClick={e=>dispatch(change_curr(key))}>{`${key} ${value}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Budget;