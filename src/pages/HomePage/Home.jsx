import React, { Suspense } from "react";
import { Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
const LoginPage = React.lazy(() => import("../../components/LoginPage"));
const Dashboard = React.lazy(() => import("../../components/Dashboard"));

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const onFinish = ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      dispatch(login());
      message.success("Logged In Successful"); // Use message.success for success message
    } else {
      message.error("Login Failed. Please try again."); // Use message.error for error message
    }
  };

  const Spinner = () => (
    <Spin size="large" />
  );

  return (
    <Suspense fallback={<Spinner />}>
      {!isLoggedIn ? (
        <LoginPage onFinish={onFinish} />
      ) : (
        <Dashboard />
      )}
    </Suspense>
  );
};

export default Home;