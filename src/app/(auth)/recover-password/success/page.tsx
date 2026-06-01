"use client";

import { useRouter } from "next/navigation";
import { AuthActionButton } from "@/modules/auth/components/AuthActionButton";
import { ACTIONS_AUTH_TYPE } from "@/modules/auth/enums/auth.enum";
import { CenteredHeader } from "@/modules/shared/components/centered-header/CenteredHeader";
import { CenteredLayout } from "@/modules/shared/components/centered-layout/CenteredLayout";

const RecoverPasswordSuccessPage = () => {
	const router = useRouter();

	return (
		<CenteredLayout>
			<CenteredHeader
				title="Revisa tu bandeja de entrada"
				subtitle="Te enviamos un correo con las instrucciones para restablecer tu contraseña. Si no lo encuentras, revisa tu carpeta de spam o correo no deseado."
			/>

			<AuthActionButton
				actionType={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT}
				onClick={() => router.push("/")}
			/>
		</CenteredLayout>
	);
};

export default RecoverPasswordSuccessPage;
