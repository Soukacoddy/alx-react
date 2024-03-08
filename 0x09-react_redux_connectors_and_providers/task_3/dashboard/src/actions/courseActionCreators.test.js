import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('Test for the selectCourse action', () => {
    it('should return { type: SELECT_COURSE, index: 1 }', () => {
        const action = {
            type: 'SELECT_COURSE',
            index: 1,
        };
        expect(selectCourse(1)).toEqual(action);
    });

    it('should return { type: UNSELECT_COURSE, index: 1 }', () => {
        const action = {
            type: 'UNSELECT_COURSE',
            index: 1,
        };
        expect(unSelectCourse(1)).toEqual(action);
    });
});