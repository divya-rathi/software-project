import firebase from "~/plugins/firebase";

export const state = () => ({
  user: null,
  userLoggedState: false
});

export const mutations = {
  userLogin(state, userDetails) {
    if (state.user == null) {
      firebase
        .auth()
        .signInWithEmailAndPassword(userDetails.email, userDetails.password);
      state.user = firebase.auth().currentUser;
      state.userLoggedState = true;
    }
  },
  userLogout(state) {
    firebase.auth().signOut();
    state.user = null;
    state.userLoggedState = false;
  }
};
