import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

//action creators

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}; //ES 6 in play second parameter has the same key as object name
  //so no need to use semicolon
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

//thunks

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

//this method is generic - to follow for various apps
//it's using getState which is not used in our application
//as we are passing course, but might be useful in other apps
//as the getState allows you to get hold of the piece of Store data
//without needing to pass it in
export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
      }).catch(error => {
        throw(error);
      });
    };
  }
