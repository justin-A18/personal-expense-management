'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useHydration } from '../hooks/useHidration';
import { Loader } from '../components/loader/Loader';

interface GuardProps {
	mode: 'auth' | 'guest';
	children: React.ReactNode;
}

export const AuthenticatedGuard = ({ mode, children }: GuardProps) => {
	const router = useRouter();
	const hydrated = useHydration();
	const token = useAuthStore((s) => s.token);

	useEffect(() => {
		if (!hydrated) return;

		if (mode === 'auth' && !token) {
			router.replace('/');
		}

		if (mode === 'guest' && token) {
			router.replace('/wallets');
		}
	}, [hydrated, token, mode, router]);

	if (!hydrated) return <Loader />;
	if ((mode === 'auth' && !token) || (mode === 'guest' && token)) return null;

	return <>{children}</>;
};
