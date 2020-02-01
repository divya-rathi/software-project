import { fireDb } from "@/services/firebase";
import jdenticon from "jdenticon";

export const state = () => ({
  courseCode: "",
  courseDetails: {},
  coursesFetched: false,
  courseCodeList: [],
  courseNameList: [],
  courseIconList: []
});

export const mutations = {
  SET_COURSE_CODE: (state, newCourseCode) => {
    window.$nuxt.$set(state, "courseCode", newCourseCode);
  },
  SET_COURSE_DETAILS: (state, newCourseDetails) => {
    window.$nuxt.$set(state, "courseDetails", newCourseDetails);
  },
  SET_COURSES_FETCH_STATUS: (state, coursesFetched) => {
    window.$nuxt.$set(state, "coursesFetched", coursesFetched);
  },
  SET_COURSE_CODE_LIST: (state, courseCodeList) => {
    window.$nuxt.$set(state, "courseCodeList", courseCodeList);
  },
  SET_COURSE_NAME_LIST: (state, courseNameList) => {
    window.$nuxt.$set(state, "courseNameList", courseNameList);
  },
  SET_COURSE_ICON_LIST: (state, courseIconList) => {
    window.$nuxt.$set(state, "courseIconList", courseIconList);
  }
};

export const getters = {
  getCourseCode(state) {
    return state.courseCode;
  },
  getCourseDetails(state) {
    return state.courseDetails;
  },
  getCourseList(state) {
    return {
      courseCodeList: state.courseCodeList,
      courseNameList: state.courseNameList,
      courseIconList: state.courseIconList
    };
  }
};

export const actions = {
  async search({ commit }, newCourseCode) {
    const ref = fireDb.collection("courses").doc(newCourseCode);
    try {
      let snap = await ref.get();
      let newCourseDetails = snap.data();
      await commit("SET_COURSE_CODE", newCourseCode);
      await commit("SET_COURSE_DETAILS", newCourseDetails);
    } catch (err) {
      await commit("SET_COURSE_CODE", null);
      await commit("SET_COURSE_DETAILS", null);
      console.log(err);
    }
  },
  fetchCourseList({ commit, state }) {
    if (!state.coursesFetched) {
      fireDb
        .collection("courses")
        .get()
        .then(querySnapshot => {
          let courseCodeList = [];
          let courseNameList = [];
          let courseIconList = [];

          querySnapshot.forEach(doc => {
            courseCodeList.push(doc.id);
            courseNameList.push(doc.data().courseName);
            courseIconList.push(jdenticon.toSvg(doc.data().courseName, 200));
          });

          commit("SET_COURSE_CODE_LIST", courseCodeList);
          commit("SET_COURSE_NAME_LIST", courseNameList);
          commit("SET_COURSE_ICON_LIST", courseIconList);
          commit("SET_COURSES_FETCH_STATUS", true);
        });
    }
  }
};
