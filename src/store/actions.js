export const change_budget = (budget) => {
    return {
        type : "CHANGE_BUDGET",
        paylaod : budget
    }
}
export const increase = (expense) => {
    return {
        type : "INCREASE",
        payload : expense
    }
}
export const reduce = (expense) => {
    return {
        type : "REDUCE",
        payload : expense
    }
}
export const deleteItem = (expense) => {
    return {
        type : "DELETE_ITEM",
        payload : expense
    }
}
export const increaseBy = (expense) => {
    return {
        type : "INCREASE_BY",
        payload : expense
    }
}
export const reduceBy = (expense) => {
    return {
        type : "REDUCE_BY",
        payload : expense
    }
}
export const change_curr = (curr) => {
    return {
        type : "CHANGE_CURR",
        payload : curr
    }
}