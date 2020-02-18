import { auth, fireDb } from "@/services/firebase";
// import Cookie from "js-cookie";

export const store = () => ({
  loggedIn: false,
  uid: null,
  userDetails: null
});

export const mutations = {
  SET_UID: (state, uid) => {
    window.$nuxt.$set(state, "uid", uid);
  },
  SET_USER_DETAILS: (state, userDetails) => {
    window.$nuxt.$set(state, "userDetails", userDetails);
  },
  SET_USER_LOGGEDIN: (state, userLogIn) => {
    window.$nuxt.$set(state, "loggedIn", userLogIn);
  }
};

export const getters = {
  isUserLoggedIn(state) {
    return state.uid != null;
  },
  getUserDetails(state) {
    return state.userDetails;
  },
  getUserRollNumber(state) {
    return state.userDetails ? state.userDetails["registrationNumber"] : "XX.XX.NNXXNNN";
  },
  getUserType(state) {
    return state.userDetails ? state.userDetails["userType"] : "GUEST";
  },
  isUserLoggedIn(state) {
    return state.loggedIn;
  }
};

export const actions = {
  async login({ commit, state }, account) {
    if (process.server) return;

    if (state.loggedIn == false) {
      try {
        await auth.signInWithEmailAndPassword(account.email, account.password);

        // const token = await auth.currentUser.getIdToken();

        // Cookie.set("access_token", token);

        const { uid } = auth.currentUser;

        fireDb
          .collection("users")
          .doc(uid)
          .get()
          .then(function(doc) {
            let userDetails = doc.data();

            commit("SET_USER_DETAILS", {
              email: userDetails.email,
              gender: userDetails.gender,
              name: userDetails.name,
              phoneNumber: userDetails.phoneNumber,
              registrationNumber: userDetails.registrationNumber,
              userType: userDetails.userType
            });
          });

        commit("SET_UID", uid);
        commit("SET_USER_LOGGEDIN", true);
        console.log("Successfully logged in!");
      } catch (err) {
        throw err;
      }
    }
  },
  logout({ commit }) {
    auth.signOut();
    commit("SET_UID", null);
    commit("SET_USER_DETAILS", null);
    commit("SET_USER_LOGGEDIN", false);
    // this.$router.push({ path: "/" });
    console.log("Successfully logged out!");
  }
};
