"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
