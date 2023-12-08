import { FC } from "react";
import { ThemeButton } from "components";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 my-2 sm:my-0 py-12 relative">
      <div className="fixed top-4 right-4">
        <ThemeButton />
      </div>
      <div className="w-full max-w-md rounded-lg px-5 py-8 bg-default-50 border-1 dark:border-white/5 border-black/10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
