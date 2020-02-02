import { auth, fireDb } from "@/services/firebase";
// import Cookie from "js-cookie";

export const store = () => ({
  uid: null,
  userDetails: null
});

export const mutations = {
  SET_UID: (state, uid) => {
    window.$nuxt.$set(state, "uid", uid);
  },
  SET_USER_DETAILS: (state, userDetails) => {
    window.$nuxt.$set(state, "userDetails", userDetails);
  }
};

export const getters = {
  isUserLoggedIn(state) {
    return state.uid != null;
  },
  getUserDetails(state) {
    return state.userDetails;
  }
};

export const actions = {
  async login({ commit, state }, account) {
    if (state.uid == null) {
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

        console.log("Successfully logged in!");
      } catch (err) {
        throw err;
      }
    }
  },
  async logout({ commit }) {
    await auth.signOut();
    commit("SET_UID", null);
    commit("SET_USER_DETAILS", null);
    this.$router.push({ path: "/" });
    console.log("Successfully logged out!");
  }
};
