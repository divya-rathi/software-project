export default function({ store, route, redirect }) {
  const user = store.state.users.uid;

  if (!user && route.path.match(/\/account\/*/g)) {
    redirect("/");
  }
}
