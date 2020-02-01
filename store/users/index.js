import { auth } from "@/services/firebase";
import Cookie from "js-cookie";

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
  }
};

export const actions = {
  async login({ commit }, account) {
    try {
      await auth.signInWithEmailAndPassword(account.email, account.password);

      const token = await auth.currentUser.getIdToken();

      Cookie.set("access_token", token);

      const userDetails = auth.currentUser;

      await commit("SET_UID", userDetails.uid);

      await commit("SET_USER_DETAILS", userDetails);

      console.log("Successfully logged in!");
    } catch (err) {
      throw err;
    }
  },
  async logout({ commit }) {
    await auth.signOut();
    await commit("SET_UID", null);
    await commit("SET_USER_DETAILS", null);
    this.$router.push({ path: "/" });
    console.log("Successfully logged out!");
  }
};
