"use client";

import { useRouter } from "next/navigation";
import { AuthActionButton } from "@/modules/auth/components/AuthActionButton";
import { ACTIONS_AUTH_TYPE } from "@/modules/auth/enums/auth.enum";
import { CenteredHeader } from "@/modules/shared/components/centered-header/CenteredHeader";
import { CenteredLayout } from "@/modules/shared/components/centered-layout/CenteredLayout";

const ChangePasswordSuccessPage = () => {
	const router = useRouter();

	return (
		<CenteredLayout>
			<CenteredHeader
				title="¡Contraseña actualizada!"
				subtitle="Tu contraseña fue cambiada con éxito. Ahora puedes iniciar sesión con tus nuevas credenciales."
			/>

			<AuthActionButton
				actionType={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT}
				onClick={() => router.push("/")}
			/>
		</CenteredLayout>
	);
};

export default ChangePasswordSuccessPage;
