import {type Dispatch} from '@reduxjs/toolkit';
import {setPage} from "../../../pages/TablePage/model/slices/postSlice";

export function nextPage(dispatch: Dispatch, page: number) {
    dispatch(setPage(page + 1));
}

export function beforePage(dispatch: Dispatch, page: number) {
    dispatch(setPage(page - 1));
}

export function postsByPage(dispatch: Dispatch, page: number) {
    dispatch(setPage(page));
}

