import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Task = React.lazy(() => import("./pages/Task"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

function App() {
  return (
    <section className="flex h-screen">
      <Sidebar className="w-1/10 min-w-40" />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Card title="Task 1" priority="Low" date="2023-01-01" />
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/task" element={<Task />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </section>
  );
}

export default App;
