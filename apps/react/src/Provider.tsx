import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { useDarkMode } from "hooks";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import { api } from "trpc";
import { useState } from "react";
import { getCookie } from "utils";

interface ProviderProps {
  children: React.ReactNode;
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Provider: React.FC<ProviderProps> = ({ children }) => {
  useDarkMode();

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url:
            import.meta.env.VITE_APP_TRPC_URL || "http://localhost:8080/trpc",
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              Authorization: `Bearer ${getCookie("__session")}`,
            };
          },
        }),
      ],
      transformer: superjson as any,
    }),
  );

  return (
    <ClerkProvider publishableKey={clerkPubKey || ""}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Toaster position="bottom-right" />
            <NextUIProvider>{children}</NextUIProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </api.Provider>
    </ClerkProvider>
  );
};

export default Provider;
