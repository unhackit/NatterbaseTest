const INITIAL_STATE = {
    currentData: [ ]
}

const summaryReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SET_SUMMARY_DATA':
            return {
                ...state,
                currentData: action.payload
            }
        default: 
            return state
    }
}

export default summaryReducer;