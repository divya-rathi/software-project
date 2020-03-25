// import JWTDecode from "jwt-decode";
// import cookieparser from "cookieparser";
import createPersistedState from "vuex-persistedstate";
// import { fireDb } from "@/services/firebase";

export const actions = {
  nuxtServerInit({ commit }) {
    // console.log("server initialized");
  }
};

export const plugins = [
  createPersistedState({
    paths: ["users", "course"]
  })
];


    // if (process.server && process.static) return;
    // if (!req.headers.cookie) return;

    // const parsed = cookieparser.parse(req.headers.cookie);
    // const accessTokenCookie = parsed.access_token;

    // if (!accessTokenCookie) return;

    // const decoded = JWTDecode(accessTokenCookie);

    // if (decoded) {
    //   commit("SET_UID", decoded.user_id);
    //   fireDb
    //     .collection(users)
    //     .doc(decoded.user_id)
    //     .get()
    //     .then(function(doc) {
    //       if (doc.exists) {
    //         commit("SET_USER_DETAILS", {
    //           email: doc.data().email,
    //           gender: doc.data().gender,
    //           name: doc.data().name,
    //           phoneNumber: doc.data().phoneNumber,
    //           registrationNumber: doc.data().registrationNumber,
    //           userType: doc.data().userType
    //         });
    //       } else {
    //         commit("SET_USER_DETAILS", null);
    //       }
    //     });
    // }