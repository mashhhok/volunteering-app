import { redirect } from "next/navigation";
import { useAuthStore } from "../store";

export const useConditionalRedirect = () => {
  const email = useAuthStore((state) => state.email);
  if (!email) redirect("/auth");
};
