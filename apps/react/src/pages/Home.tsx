import { Counter } from "components";
import { Button } from "@nextui-org/react";
import { useDarkMode } from "hooks";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { DashboardLayout } from "layouts";

const Home = () => {
  const { signOut } = useAuth();
  const { toggleTheme, isDark } = useDarkMode();

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="self-end flex p-4 gap-3">
          <Link to="/404">Go to 404</Link>
          <Button
            isIconOnly
            onClick={toggleTheme}
            startContent={isDark ? <Sun /> : <Moon />}
          />

          <Button color="primary" onPress={() => signOut()}>
            Sign Out
          </Button>
        </div>
        <Counter />
      </div>
    </DashboardLayout>
  );
};

export default Home;
