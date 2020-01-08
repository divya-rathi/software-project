import { fireDb } from "@/services/firebase";

export const state = () => ({
  courseCode: "",
  courseDetails: {}
});

export const mutations = {
  SET_COURSE_CODE: (state, newCourseCode) => {
    window.$nuxt.$set(state, "courseCode", newCourseCode);
  },
  SET_COURSE_DETAILS: (state, newCourseDetails) => {
    window.$nuxt.$set(state, "courseDetails", newCourseDetails);
  }
};

export const getters = {
  getCourseCode(state) {
    return state.courseCode;
  },
  getCourseDetails(state) {
    return state.courseDetails;
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
  }
};
