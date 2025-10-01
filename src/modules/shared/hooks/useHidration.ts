'use client';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

export const useHydration = () => {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		const unsub = useAuthStore.persist.onFinishHydration(() => {
			setHydrated(true);
		});

		if (useAuthStore.persist.hasHydrated()) {
			setHydrated(true);
		}

		return () => unsub();
	}, []);

	return hydrated;
};
