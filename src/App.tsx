import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingSpinner from "./components/LoadingSpinner";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Projects = React.lazy(() => import("./pages/Projects"));
const ProjectTasks = React.lazy(() => import("./pages/ProjectTasks"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const TaskDetail = React.lazy(() => import("./pages/TaskDetail"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Layout = React.lazy(() => import("./components/Layout"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
          <Route
            path="projects/:projectId/tasks"
            element={<ProjectTasks />}
          />
          <Route
            path="projects/:projectId/tasks/:taskId"
            element={<TaskDetail />}
          />
          <Route path="projects" element={<Projects />} />
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
