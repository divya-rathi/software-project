import { fireDb } from "@/services/firebase";
import jdenticon from "jdenticon";

export const state = () => ({
  courseCode: "",
  courseDetails: {},
  coursesFetched: false,
  courseCodeList: [],
  courseNameList: [],
  courseIconList: [],
  reviews: {},
  questions: {}
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
  },
  SET_REVIEW: (state, review) => {
    window.$nuxt.$set(state.reviews, review.reviewId, review.reviewData);
  },
  CLEAR_REVIEWS: state => {
    window.$nuxt.$set(state, "reviews", {});
  },
  SET_QUESTION: (state, question) => {
    window.$nuxt.$set(
      state.questions,
      question.questionId,
      question.questionData
    );
  },
  CLEAR_QUESTIONS: state => {
    window.$nuxt.$set(state, "questions", {});
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
  },
  getCourseReviews(state) {
    return state.reviews;
  },
  getCourseQuestions(state) {
    return state.questions;
  }
};

export const actions = {
  search({ commit }, newCourseCode) {
    commit("CLEAR_REVIEWS");
    commit("CLEAR_QUESTIONS");

    fireDb
      .collection("courses")
      .doc(newCourseCode)
      .get()
      .then(function(snap) {
        let newCourseDetails = snap.data();
        commit("SET_COURSE_CODE", newCourseCode);
        commit("SET_COURSE_DETAILS", newCourseDetails);

        newCourseDetails["reviews"].forEach(reviewId => {
          fireDb
            .collection("reviews")
            .doc(reviewId)
            .get()
            .then(doc => {
              commit("SET_REVIEW", { reviewId, reviewData: doc.data() });
              console.log({ reviewId, reviewData: doc.data() });
            });
        });

        newCourseDetails["questions"].forEach(questionId => {
          fireDb
            .collection("questions")
            .doc(questionId)
            .get()
            .then(doc => {
              commit("SET_QUESTION", { questionId, questionData: doc.data() });
              console.log({ questionId, questionData: doc.data() });
            });
        });
      })
      .catch(function(err) {
        commit("SET_COURSE_CODE", null);
        commit("SET_COURSE_DETAILS", null);
        console.log(err);
      });
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
