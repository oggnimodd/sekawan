import { FC } from "react";
import { Sidebar } from "components";
import { DesktopHeader, MobileHeader } from "components";
import { useToggle } from "@mantine/hooks";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, toggleSidebar] = useToggle([false, true]);

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="md:ml-[250px] flex-1 bg-default-50">
        <DesktopHeader />
        <MobileHeader toggleSidebar={toggleSidebar} />
        <div className="flex flex-col px-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
