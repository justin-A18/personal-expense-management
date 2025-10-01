import { AuthenticatedGuard } from '@/modules/shared/guards/AuthenticatedGuard';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <AuthenticatedGuard mode='guest'>{children}</AuthenticatedGuard>;
};

export default AuthLayout;
