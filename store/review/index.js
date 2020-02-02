import { fireDb } from "@/services/firebase";

export const actions = {
  postReview({ state, dispatch }, reviewData) {
    fireDb
      .collection("reviews")
      .add(reviewData)
      .then(function(docRef) {
          dispatch("review/addStudentReviewRecord", docRef.id);
          dispatch("review/addCourseReviewRecord", docRef.id);
        });
  },
  addStudentReviewRecord(reviewId) {
    fireDb.collection("students").doc(state.users.uid).update({
        reviews: fireDb.FieldValue.arrayUnion(reviewId)
    })
  },
  addCourseReviewRecord(reviewId) {
    fireDb.collection("courses").doc(state.course.courseCode).update({
        reviews: fireDb.FieldValue.arrayUnion(reviewId)
    })
  }
};
