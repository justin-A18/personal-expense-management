"use client";

import { AuthActionButton } from "@/modules/auth/components/AuthActionButton";
import { ACTIONS_AUTH_TYPE } from "@/modules/auth/enums/auth.enum";
import { useValidateAccount } from "@/modules/auth/hooks/useValidateAccount";
import { CenteredHeader } from "@/modules/shared/components/centered-header/CenteredHeader";
import { CenteredLayout } from "@/modules/shared/components/centered-layout/CenteredLayout";
import { Spinner } from "@/modules/shared/components/spinner/Spinner";

const ValidateAccountPage = () => {
	const { data, goToLogin, isFetching } = useValidateAccount();

	return (
		<CenteredLayout>
			<CenteredHeader
				title={isFetching ? "Verificando tu cuenta..." : "Cuenta verificada"}
				subtitle={
					isFetching
						? "Espera un momento mientras confirmamos tu información."
						: data?.message
				}
			/>

			{isFetching ? (
				<Spinner />
			) : (
				<AuthActionButton
					actionType={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT}
					onClick={goToLogin}
				/>
			)}
		</CenteredLayout>
	);
};

export default ValidateAccountPage;
