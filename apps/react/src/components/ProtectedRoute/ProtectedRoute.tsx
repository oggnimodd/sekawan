import { FC, useLayoutEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  path: string;
  isUnauthenticatedOnly?: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  isUnauthenticatedOnly = false,
}) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isSignedIn) {
      if (pathname !== "/sign-up") {
        navigate("/sign-in", {
          replace: true,
        });
      }
    }

    if (isSignedIn && isUnauthenticatedOnly) {
      navigate("/", {
        replace: true,
      });
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
