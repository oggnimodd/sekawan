import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Tickets",
    href: "/tickets",
  },
];

const SidebarLinks: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col py-4 gap-y-2">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            to={link.href}
            className={clsx(
              "flex items-center py-2 px-3 text-base font-normal dark:text-foreground hover:bg-gray-100 dark:hover:bg-gray-700 capitalize",
              {
                "dark:bg-gray-700/50 border-l-2 border-primary text-primary":
                  isActive,
              },
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
