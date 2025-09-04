import { Link, useLocation } from "react-router";
import {
  House,
  CircleQuestionMark,
  Contact,
  X,
  type LucideProps,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ className = "", isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const links: {
    name: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    path: string;
  }[] = [
    { name: "Home", icon: House, path: "/" },
    { name: "About", icon: CircleQuestionMark, path: "/about" },
    { name: "Contact", icon: Contact, path: "/contact" },
  ];

  const activeLink = "text-white bg-[var(--primary-color)] shadow-sm";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`${className} flex flex-col h-screen border-r border-[var(--sidebar-border)] bg-[var(--background-secondary)] shadow-xs
          fixed top-0 left-0 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:w-60 z-40`}
      >
        <button
          className="md:hidden p-2 m-2 rounded hover:bg-[var(--sidebar-border)] self-end"
          onClick={onClose}
        >
          <X className="text-[var(--text-color)]" />
        </button>

        <div className="flex flex-col gap-2 py-4 px-2">
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              onClick={onClose}
              className={`flex gap-2 items-center p-2 rounded cursor-pointer select-none 
                ${
                  location.pathname === link.path
                    ? activeLink
                    : "text-[#64748b] hover:bg-[var(--primary-color-hover-light)]"
                }`}
            >
              <link.icon />
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
