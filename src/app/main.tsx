import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/global.css";
import App from "./App";
import { Toaster } from "@/shared/_shadcn/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
