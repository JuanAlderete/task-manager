import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Card from "./components/Card";
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
        <Route
          path="/"
          element={
            <Layout>
              <Card title="Task 1" priority="Low" date="2023-01-01" />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/task"
          element={
            <Layout>
              <Task />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
