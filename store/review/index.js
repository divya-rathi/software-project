import { fireDb, fireVal } from "@/services/firebase";

export const actions = {
  postReview({ dispatch }, reviewData) {
    let reviewId = `${reviewData.courseCode}_${reviewData.rollNumber}`;
    fireDb
      .collection("reviews")
      .doc(reviewId)
      .set(reviewData, { merge: true })
      .then(() => {
        dispatch("addStudentReviewRecord", reviewId);
        dispatch("addCourseReviewRecord", reviewId);
        dispatch("reviewPostProcess", reviewData);
        console.log(reviewId);
      });
  },
  addStudentReviewRecord({ rootState }, reviewId) {
    fireDb
      .collection("students")
      .doc(rootState.users.uid)
      .update({
        reviews: fireVal.FieldValue.arrayUnion(reviewId)
      })
      .then(() => {
        console.log("added Review in Students Record");
      });
  },
  addCourseReviewRecord({ rootState }, reviewId) {
    fireDb
      .collection("courses")
      .doc(rootState.course.courseCode)
      .update({
        reviews: fireVal.FieldValue.arrayUnion(reviewId)
      })
      .then(() => {
        console.log("added Review in Courses Record");
      });
  },
  reviewPostProcess({ commit }, reviewData) {
    let reviewId = `${reviewData.courseCode}_${reviewData.rollNumber}`;
    commit("course/SET_REVIEW", { reviewId, reviewData }, { root: true });
  }
};
