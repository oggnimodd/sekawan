import { FC } from "react";
import { Button } from "@nextui-org/react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "hooks";

const ICON_SIZE = 18;

const ThemeButton: FC = () => {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <Button
      size="sm"
      isIconOnly
      color="primary"
      onPress={toggleTheme}
      startContent={
        isDark ? <Moon size={ICON_SIZE} /> : <Sun size={ICON_SIZE} />
      }
    />
  );
};

export default ThemeButton;
