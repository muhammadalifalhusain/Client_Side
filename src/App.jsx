import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalsPage from "./pages/goals";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/forgot-pass",
      element: <ForgotPass />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/goals",
      element: <GoalsPage/>,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-400">
    <h1 className="text-4xl font-bold text-white mb-8">Selamat Datang!</h1>
    <nav className="flex gap-4">
      <Link
        to="/login"
        className="bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow-lg hover:shadow-xl transition duration-300"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-white text-green-500 font-semibold py-3 px-6 rounded shadow-lg hover:shadow-xl transition duration-300"
      >
        Register
      </Link>
    </nav>
  </div>
);

export default App;
