import { combineReducers } from 'redux';

import tableReducer from './table/table.reducer';
import summaryReducer from './summary/summary.reducer';


const rootReducer = combineReducers({
    table: tableReducer,
    summary: summaryReducer
});

export default rootReducer; 