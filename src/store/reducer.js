
const initialState = {
    budget : 2000,
    expenses : [
        {id : "Marketing", name : "Marketing", budget : 50},
        {id : "Finance", name : "Finance", budget : 300},
        {id : "Sales", name : "Sales", budget : 70},
        {id : "Human Resources", name : "Human Resources", budget : 40},
        {id : "IT", name : "IT", budget : 500}
    ],
    currency : "$",
    currencies : {"$" : "Dollar", "£" : "Pound", "Є" : "Euro", "₹" : "Ruppee"}
}
const maxExpenses = (tab) => {
    const maxim = tab.reduce((max, item)=> {
        return (max += item.budget)
    }, 0)
    return maxim
} 

const reducer = (state = initialState, action) => {
    let newExp = []
    switch(action.type){
        case "CHANGE_BUDGET":
            return {...state, budget : action.paylaod}
        case "INCREASE":
            newExp = state.expenses.map( expense =>
                expense.id === action.payload.id ? {...expense, budget : expense.budget + 10} : expense
            )
            if(maxExpenses(newExp) > state.budget){
                alert("Budget is insuffisant")
                return state;
            }else{
                return {...state, expenses : newExp}
            }
        case "REDUCE":
            newExp = state.expenses.map(expense => 
                (expense.id === action.payload.id && expense.budget !== 0  ) ? {...expense, budget : expense.budget - 10 } : expense
                )
            return {...state, expenses : newExp }
        case "REDUCE_BY":
            newExp = state.expenses.map(expense => 
                (expense.id === action.payload.id && action.payload.rate <= expense.budget) ? {...expense, budget : expense.budget - action.payload.rate} : expense
            )
            return {...state, expenses : newExp}
            
        case "DELETE_ITEM":
            newExp = state.expenses.map(expense => 
                expense.id === action.payload.id ? {...expense, budget : 0} : expense 
            )
            return {...state, expenses : newExp}
        case "INCREASE_BY":
            newExp = state.expenses.map(expense => 
                expense.id === action.payload.id ? {...expense, budget : expense.budget + action.payload.rate} : expense
            )
            if( maxExpenses(newExp) > state.budget){
                alert("Budget inssifusant");
                return state
            }else{
                return {...state, expenses : newExp}
            }
        case "CHANGE_CURR":
            return {...state, currency : action.payload}
        default :
            return state;
    }
}

export default reducer;