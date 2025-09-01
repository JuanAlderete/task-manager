import { Bell, Plus, Search } from "lucide-react";
import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-[var(--sidebar-border)] shadow-xs">
      <div className="flex items-center relative w-80">
        <Search className="absolute left-2 text-gray-400" />
        <input
          type="text"
          className="w-full rounded-lg py-2 pl-9 pr-4 focus:outline-[var(--text-color)]"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center gap-8">
        <Button>
          <Plus />
          New Task
        </Button>
        <Button className="bg-inherit rounded-full hover:bg-[var(--sidebar-border)]">
          <Bell className="text-[var(--text-color)]" />
        </Button>
        <div>
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
