import { AuthenticatedGuard } from '@/modules/shared/guards/AuthenticatedGuard';

const WalletsLayout = ({ children }: { children: React.ReactNode }) => {
	return <AuthenticatedGuard mode='auth'>{children}</AuthenticatedGuard>;
};

export default WalletsLayout;
