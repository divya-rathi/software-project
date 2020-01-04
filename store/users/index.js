import { auth } from "@/services/firebase";
import Cookie from "js-cookie";

export const store = () => ({
  user: null
});

export const mutations = {
  SET_USER: (state, account) => {
    window.$nuxt.$set(state, "user", account);
  }
};

export const getters = {
  isUserLoggedIn(state) {
    return state.user != null;
  }
};

export const actions = {
  async login({ commit }, account) {
    try {
      await auth.signInWithEmailAndPassword(account.email, account.password);

      const token = await auth.currentUser.getIdToken();

      Cookie.set("access_token", token);

      const { email, uid } = auth.currentUser;

      await commit("SET_USER", { email, uid });

      console.log("Successfully logged in!");
    } catch (err) {
      throw err;
    }
  },
  async logout({ commit }) {
    await auth.signOut();
    await commit("SET_USER", null);
    this.$router.push({ path: "/" });
    console.log("Successfully logged out!");
  }
};
