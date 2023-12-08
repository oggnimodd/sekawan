import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { useDarkMode } from "hooks";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

interface ProviderProps {
  children: React.ReactNode;
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Provider: React.FC<ProviderProps> = ({ children }) => {
  useDarkMode();

  return (
    <ClerkProvider publishableKey={clerkPubKey || ""}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster position="bottom-right" />
          <NextUIProvider>{children}</NextUIProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default Provider;
