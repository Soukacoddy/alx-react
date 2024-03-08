import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const initialCourseState = Map();

export default function courseReducer(state = initialCourseState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.merge(action.data.entities.courses || {});
        case SELECT_COURSE:
            return state.setIn([action.index, 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([action.index, 'isSelected'], false);
        default:
            return state;
    }
};