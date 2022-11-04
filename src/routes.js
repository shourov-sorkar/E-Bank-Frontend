import Home from "./Pages/Home.js/Home";
import Login from "./Pages/Login/Login";

const routes = [
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: Home,
  },
];

export default routes;
