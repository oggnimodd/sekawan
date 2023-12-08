import UserMenu from "./UserMenu";
import { Menu } from "lucide-react";
import { Button } from "@nextui-org/react";
import { FC } from "react";

interface MobileHeaderProps {
  toggleSidebar?: () => void;
}

const MobileHeader: FC<MobileHeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full flex items-center justify-between p-4 md:hidden">
      <Button
        isIconOnly
        startContent={<Menu />}
        color="primary"
        variant="light"
        onClick={toggleSidebar}
      />

      {/* Theme Toggle */}
      <UserMenu />
    </header>
  );
};

export default MobileHeader;
