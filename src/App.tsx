import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <section className="flex h-screen">
      <Sidebar className="w-1/10 min-w-40" />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={"Home"} />
          </Routes>
        </main>
      </div>
    </section>
  );
}

export default App;
