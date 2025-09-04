import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingSpinner from "./components/LoadingSpinner";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Task = React.lazy(() => import("./pages/Task"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Layout = React.lazy(() => import("./components/Layout"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Task />} />
          <Route path="tasks" element={<Task />} />
          <Route path="contact" element={<Dashboard />} />
          <Route path="about" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
