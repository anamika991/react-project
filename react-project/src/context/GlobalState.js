import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


//inital state
const initalState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initalState);

//provider components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    //actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }
        );
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>

            {children}
        </GlobalContext.Provider>
    );
}
