import { Navigate } from "react-router-dom";
import { useAuth } from "./authC";
import { ReactNode } from "react";

interface RequiredLogProps {
  children: ReactNode;
}

export const RequiredLog: React.FC<RequiredLogProps> = ({ children }) => {
  const auth = useAuth();
  if (!auth?.user) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}
