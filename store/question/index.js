import { fireDb, fireVal } from "@/services/firebase";

export const actions = {
  postQuestion({ dispatch }, questionData) {
    fireDb
      .collection("reviews")
      .add(questionData)
      .then(docRef => {
        dispatch("addStudentQuestionRecord", docRef.id);
        dispatch("addCourseQuestionRecord", docRef.id);
        dispatch("postProcessQuestion", {
          questionId: docRef.id,
          questionData
        });
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
      .set(
        {
          answer: answerData.answer,
          facultyId: answerData.facultyId
        },
        { merge: true }
      )
      .then(() => {
        dispatch("addFacultyQuestionRecord", answerData.questionId);
        dispatch("postProcessAnswer", answerData);
      });
  },
  addFacultyQuestionRecord({ rootState }, questionId) {
    fireDb
      .collection("staffs")
      .doc(rootState.users.uid)
      .update({
        questions: fireVal.FieldValue.arrayUnion(questionId)
      });
  },
  postProcessQuestion({ commit }, question) {
    commit("course/SET_QUESTION", question, { root: true });
  },
  postProcessAnswer({ commit }, answerData) {
    
  }
};
