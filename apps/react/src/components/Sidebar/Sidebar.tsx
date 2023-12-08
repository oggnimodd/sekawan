import { Image } from "@nextui-org/react";
import SidebarLinks from "./SidebarLinks";
import { Link } from "react-router-dom";
import { FC, useEffect } from "react";
import clsx from "clsx";
import { breakpoints } from "tailwind";
import { useMediaQuery, useClickOutside, usePrevious } from "@mantine/hooks";

interface SidebarProps {
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen = false,
  toggleSidebar = () => {},
}) => {
  const isMd = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const previousIsMd = usePrevious(isMd);

  const ref = useClickOutside(() => {
    if (isSidebarOpen && !isMd) {
      toggleSidebar();
    }
  });

  useEffect(() => {
    if (!previousIsMd && isMd && !isSidebarOpen) {
      toggleSidebar();
    }

    if (previousIsMd && !isMd && isSidebarOpen) {
      toggleSidebar();
    }
  }, [isMd, previousIsMd]);

  return (
    <div
      ref={ref}
      className={clsx(
        "w-[250px] h-screen md:translate-x-0 md:flex flex-col bg-background dark fixed z-50",
        { "-translate-x-full": !isSidebarOpen, "!translate-x-0": isMd },
      )}
    >
      <div className="flex flex-col w-full min-h-full overflow-y-auto">
        <Link to="/" className="flex gap-x-1 items-center">
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Dasboard Kit Logo"
            className="w-12 mx-auto mt-4"
          />
          <p className="text-foreground font-medium text-lg mt-4">
            Dashboard Kit
          </p>
        </Link>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
