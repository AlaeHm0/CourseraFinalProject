import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { reduceBy, increaseBy } from '../store/actions';

function Change(){
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expenses)
    const currency = useSelector(state => state.currency)
    const [ rate, setRate ] = useState(0)
    const [ alloc, setAlloc ] = useState("Add")
    const [ dep, setDep ] = useState(expenses[0].id)

    // handle save
    const handleSave = () => {
        const expense = {
            id : dep,
            rate : parseInt(rate)
        }
        if(alloc === "Add"){
            dispatch(increaseBy(expense))
        }else{
            dispatch(reduceBy(expense))
        }
        setRate(0)
    }
    return(
        <div>
            <h2 className="mt-2">Change Allocation</h2>
                <label className='alert alert-secondary p-2'>Departement</label>
                <select className='p-2 me-3' value={dep} onChange={e=>setDep(e.target.value)}>
                    {expenses.map((exp, i)=> 
                        <option key={i} value={exp.id}>{exp.name}</option>
                    )}
                </select>
                <label className='alert alert-secondary p-2'>Allocation</label>
                <select className='p-2 me-3' value={alloc} onChange={e=>setAlloc(e.target.value)}>
                    <option value="Add">Add</option>
                    <option value="Reduce">Reduce</option>
                </select>
                <span>{currency}</span>
            <input type="number" className='p-2 me-3' step="10" min="0" value={rate} onChange={e=>setRate(e.target.value)}/>
            <button className="btn btn-primary p-2" onClick={handleSave}>Save</button>
        </div>
    )
}
export default Change;