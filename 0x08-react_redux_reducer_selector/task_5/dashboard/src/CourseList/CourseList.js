import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
    table: {
        width: '90%',
        marginTop: '30px',
        border: '1px solid #ddd',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default function CourseList({ listCourses }) {
    return (
        <table id='CourseList' className={css(styles.table)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
            {listCourses.length === 0 ? (
                <CourseListRow textFirstCell='No course available yet' isHeader={false} />
            ) : (
                listCourses.map((course, index) => (
                    <CourseListRow key={index} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                ))
            )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = { listCourses: PropTypes.arrayOf(CourseShape), };
CourseList.defaultProps = { listCourses: [], };