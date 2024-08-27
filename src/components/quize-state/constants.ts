import { Dispatch  } from "react";

export enum ACTION_TYPE {
    SELECT_STAGE = 'SELECT_STAGE',
    SELECT_ROW = 'SELECT_ROW',
    SELECT_COLUMN = 'SELECT_COLUMN',
    ADD_ROW = 'ADD_ROW',
    ADD_COLUMN = 'ADD_COLUMN',
    UPDATE_ACTIVECOLUMN_DATA = 'UPDATE_ACTIVECOLUMN_DATA',
}

export interface QuizeStateProviderProps {
    children: React.ReactNode;
}

export interface ColumDataProps {
    columnKey: string,
    columnType: string,
    columnData: string,
    columnClassName: string,
}

export interface RowDataProps {
    rowKey: string,
    rowData: ColumDataProps[],
}

export interface StateProps {
    selectedStage: string,
    selectedRow: string,
    selectedColumn: string,
    activeColumnData: ColumDataProps | null,
    pageData: RowDataProps[]
}

interface ObjectWithStringAtributes {
    [key: string]: string;
}
export interface SetColumnPaylodProps {
    selectedColumn?: string, 
    selectedRow?: string, 
    activeColumnData: ColumDataProps,
}
export interface ActionProps {
    type: ACTION_TYPE,
    payload?: ObjectWithStringAtributes | SetColumnPaylodProps ;
}

export interface PageContextIntreface {
    state: StateProps,
    dispatch: Dispatch<ActionProps>,
}

export interface SetNewDataProps {
    fn: (pageData: RowDataProps[], selectedRow: string, selectedColumn: string, newItem: ColumDataProps ) => RowDataProps[]
}

export const initialState = {
    selectedStage: 'page',
    selectedRow: '',
    selectedColumn: '',
    activeColumnData: null,
    pageData: [
        {
            rowKey: 'tytleRow',
            rowData: [
                {
                    columnKey: 'tytleRow-tytleColumn',
                    columnType: 'text',
                    columnData: '# Untitled',
                    columnClassName: 'text-align-center',
                }
            ]
        }
    ]
}

export const initialColumn = {
    columnKey: '',
    columnType: 'text',
    columnData: '',
    columnClassName: 'text-align-left',
}