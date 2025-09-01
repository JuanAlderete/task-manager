import { Link, useLocation } from "react-router";
import {
  House,
  CircleQuestionMark,
  Contact,
  type LucideProps,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

function Sidebar({ className = "" }: SidebarProps) {
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
    <aside
      className={`${className} flex flex-col h-screen border-r border-[var(--sidebar-border)] bg-[var(--background-secondary)] shadow-xs`}
    >
      <div className="flex flex-col gap-2 py-4 px-2">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.name}
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
  );
}

export default Sidebar;
