import type React from "react";
import { AuthenticatedGuard } from "@/modules/shared/guards/AuthenticatedGuard";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <AuthenticatedGuard mode="guest">{children}</AuthenticatedGuard>;
};

export default AuthLayout;
