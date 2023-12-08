import { useLocation } from "react-router-dom";
import { formatPath } from "utils";
import UserMenu from "./UserMenu";

const DesktopHeader = () => {
  const { pathname } = useLocation();

  const formattedPathname =
    pathname === "/" ? "Dashboard" : formatPath(pathname);

  return (
    <header className="w-full md:flex items-center justify-between p-4 hidden">
      {/* Page Title */}
      <p className="text-lg font-semibold text-foreground">
        {formattedPathname}
      </p>

      {/* Theme Toggle */}
      <UserMenu />
    </header>
  );
};

export default DesktopHeader;
