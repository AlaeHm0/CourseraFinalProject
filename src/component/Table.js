import { useSelector, useDispatch } from "react-redux";
import { increase, deleteItem, reduce } from "../store/actions";
import { IoMdRemoveCircle, IoMdAddCircle, IoMdCloseCircle  } from "react-icons/io";


function Table(){
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    return(
        <div>
            <h2 className="mt-2">Allocation</h2>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th>Departement</th>
                        <th>Allocated Budget</th>
                        <th>Increase By 10</th>
                        <th>Reduce by 10</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.expenses.map((expense, i) => (
                        <tr key={i}>
                            <td>{expense.name}</td>
                            <td>{state.currency}{expense.budget}</td>
                            <td><IoMdAddCircle color="green" size="2.2em" style={{cursor : "pointer"}} onClick={()=>dispatch(increase(expense))}></IoMdAddCircle></td>
                            <td><IoMdRemoveCircle color="red" size="2.2em" style={{cursor : "pointer"}} onClick={()=>dispatch(reduce(expense))}></IoMdRemoveCircle></td>
                            <td><IoMdCloseCircle color="black" size="1.5em" style={{cursor : "pointer"}} onClick={()=>dispatch(deleteItem(expense))}></IoMdCloseCircle></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;