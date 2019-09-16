import { put, call } from 'redux-saga/effects';
import { fetchGetCategories } from './categoriesApi';
import * as actionTypes from '../actionTypes';

export function* getCategoriesSaga({ token }) {
  try {
    const response = yield call(fetchGetCategories, token);

    const data = response.result;

    yield put({ type: actionTypes.GET_CATEGORIES_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAILED, error });
  }
}
