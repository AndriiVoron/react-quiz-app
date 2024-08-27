import React, { useContext, useReducer } from 'react';
import { 
    initialState, 
    StateProps, 
    QuizeStateProviderProps, 
    ACTION_TYPE, 
    initialColumn,
    PageContextIntreface, 
    ActionProps, 
    SetNewDataProps
 } from './constants';

const PageState = React.createContext<PageContextIntreface>({
    state: initialState,
    dispatch: () => null,
});


export const usePageState = () => {
    return useContext(PageState);
}

const setNewData: SetNewDataProps['fn'] = (pageData, selectedRow, selectedColumn, newItem) => {
    return pageData.map(row => {
        if(row.rowKey === selectedRow) {
            return {
                ...row,
                rowData: row.rowData.map(column => {
                    if(column.columnKey === selectedColumn) {
                        return newItem;
                    }
                    return column
                })
            }
        }
        return row
    })
}

const pageStateReducer = (state: StateProps, action: ActionProps): StateProps => {
    const {selectedRow, selectedColumn, pageData} = state;

    switch(action.type) {
        case ACTION_TYPE.SELECT_STAGE:
            return {
                ...state, 
                ...action.payload,
                selectedRow: '',
                selectedColumn: '',
                activeColumnData: null,
            };
        case ACTION_TYPE.SELECT_ROW:
            return {
                ...state,
                ...action.payload, 
                selectedColumn: '',
                activeColumnData: null,
            };
        case ACTION_TYPE.SELECT_COLUMN:
            return {
                ...state, 
                ...action.payload,
            };
        case ACTION_TYPE.ADD_ROW: 
            const rowKey = `row-${Date.now()}`
            const newRow = {
                rowKey: rowKey,
                rowData: [],
            }
            pageData.push(newRow);
            return {
                ...state,
                selectedRow: rowKey,
                selectedColumn: '',
                activeColumnData: null,
                pageData
            };
        case ACTION_TYPE.ADD_COLUMN: 
            const columnKey = `column-${Date.now()}`
            const newColumn = {
                ...initialColumn,
                columnKey: columnKey,
            }          
            return {
                ...state,
                selectedColumn: columnKey,
                activeColumnData: newColumn,
                pageData: pageData.map(row => {
                    if(row.rowKey === selectedRow) {
                        row.rowData.push(newColumn);
                    }
                    return row
                })
            };
        case ACTION_TYPE.UPDATE_ACTIVECOLUMN_DATA: 
            if(action.payload?.activeColumnData && typeof action.payload?.activeColumnData !== 'string') {
                return {
                    ...state,
                    ...action.payload,
                    pageData: setNewData(pageData, selectedRow, selectedColumn, action.payload.activeColumnData)
                };
            } else {
                return state;
            }
        default: return state;
    }
}

export const QuizeStateProvider: React.FC<QuizeStateProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(pageStateReducer, initialState)

    const pageStateValue: PageContextIntreface = {
        state,
        dispatch
    }

    return (
        <PageState.Provider value={pageStateValue}>
            { children }
        </PageState.Provider>
    )
}
