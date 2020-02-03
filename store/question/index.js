import { fireDb, fireVal } from "@/services/firebase";

export const actions = {
  postQuestion({ dispatch }, questionData) {
    fireDb
      .collection("reviews")
      .add(questionData)
      .then(docRef => {
        dispatch("addStudentQuestionRecord", docRef.id);
        dispatch("addCourseQuestionRecord", docRef.id);
      });
  },
  addStudentQuestionRecord({ rootState }, questionId) {
    fireDb
      .collection("students")
      .doc(rootState.users.uid)
      .update({
        questions: fireVal.FieldValue.arrayUnion(questionId)
      });
  },
  addCourseQuestionRecord({ rootState }, questionId) {
    fireDb
      .collection("courses")
      .doc(rootState.course.courseCode)
      .update({
        questions: fireVal.FieldValue.arrayUnion(questionId)
      });
  },
  postAnswer({ dispatch }, answerData) {
    fireDb
      .collection("questions")
      .doc(answerData.questionId)
      .update({
        answer: answerData.answer,
        facultyId: answerData.facultyId
      })
      .then(() => {
        dispatch("addFacultyQuestionRecord", anserData.questionId);
      });
  },
  addFacultyQuestionRecord({ rootState }, questionId) {
    fireDb
      .collection("staffs")
      .doc(rootState.users.uid)
      .update({
        questions: fireVal.FieldValue.arrayUnion(questionId)
      });
  }
};
