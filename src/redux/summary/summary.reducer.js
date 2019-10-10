const INITIAL_STATE = {
    currentData: [
        {
            title: 'Total Insurance Bought',
            img: 'insurance-bought.svg',
            bg: 'insurance-shield',
            data: '0',
        },
        {
            title: 'Total Amount of Insurance',
            img: 'total amount insurance icon.svg',
            bg: 'total-amount',
            data: '14000',
        },
        {
            title: 'Total Insurance Claims',
            img: 'insurance claim icon (1).svg',
            bg: 'insurance-claim',
            data: '0',
        },
        {
            title: 'Total Amount of Claims',
            img: 'amount of claims icon.svg',
            bg: 'amount-of-claims',
            data: '200000',
        }
    ]
}

const summaryReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SET_SUMMARY_DATA':
            return{
                ...state,
                currentData: {
                    ...state.currentData,
                    data: action.payload
                }
            }
        default: 
            return state
    }
}

export default summaryReducer;