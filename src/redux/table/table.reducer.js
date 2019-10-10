const INITIAL_STATE = {
    currentTableData: [ ]
}


const tableReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_TABLE_DATA':
            return {
                ...state,
                currentTableData: action.payload
            }
            default:
                return state
        }
} 


export default tableReducer;