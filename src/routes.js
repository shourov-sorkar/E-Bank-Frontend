import Home from "./Pages/Home.js/Home";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";

const routes = [
  {
    path: "/home-page",
    exact: true,
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    exact: true,
    name: "Registration",
    component: Registration,
  },
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: Home,
  },
];

export default routes;
