import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            console.log(changeList(data.data).data._tail.array);
            dispatch(changeList(data.data).data._tail.array);
        }).catch(() => {
            console.log('1error');
        })
    }
};