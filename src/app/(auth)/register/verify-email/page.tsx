"use client";

import { useRouter } from "next/navigation";
import { AuthActionButton } from "@/modules/auth/components/AuthActionButton";
import { ACTIONS_AUTH_TYPE } from "@/modules/auth/enums/auth.enum";
import { CenteredHeader } from "@/modules/shared/components/centered-header/CenteredHeader";
import { CenteredLayout } from "@/modules/shared/components/centered-layout/CenteredLayout";

const VerifyEmailPage = () => {
	const router = useRouter();

	return (
		<CenteredLayout>
			<CenteredHeader
				title="Verifica tu correo"
				subtitle="Te hemos enviado un email. Haz clic en el enlace para activar tu cuenta."
			/>

			<AuthActionButton
				actionType={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT}
				onClick={() => router.push("/")}
			/>
		</CenteredLayout>
	);
};

export default VerifyEmailPage;
