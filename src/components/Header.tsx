import { Bell, Plus, Search, Menu } from "lucide-react";
import Button from "./Button";
import { useEffect, useState } from "react";
import { ProjectService } from "../services/projectService";

interface HeaderProps {
  onMenuClick?: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  // TODO: Busqueda para cada page
  // const [searchData, setSearchData] = useState("");

  // useEffect(() => {
  //   const getData = setTimeout(() => {
  //     ProjectService.searchProjects(searchData, "");
  //   }, 2000);
  //   return () => clearTimeout(getData);
  // }, [searchData]);

  return (
    <header className="flex items-center justify-between p-4 border-b border-[var(--sidebar-border)] shadow-xs gap-4 w-full">
      <div className="flex items-center gap-2 w-full md:w-auto">
        <button
          className="md:hidden p-2 rounded hover:bg-[var(--sidebar-border)]"
          onClick={onMenuClick}
        >
          <Menu className="text-[var(--text-color)]" />
        </button>
        <div className="flex items-center relative flex-1 w-full md:w-80">
          <Search className="absolute left-2 text-gray-400" />
          <input
            type="text"
            className="w-full rounded-lg py-2 pl-9 pr-4 focus:outline-[var(--text-color)]"
            placeholder="Search..."
            // onChange={(event) => setSearchData(event.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-8">
        <Button className="hidden md:flex">
          <Plus />
          New Task
        </Button>
        <Button className="bg-inherit rounded-full hover:bg-[var(--sidebar-border)]">
          <Bell className="text-[var(--text-color)]" />
        </Button>
        <img
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
      </div>
    </header>
  );
}

export default Header;
