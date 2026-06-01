"use client";

import { AuthActionButton } from "@/modules/auth/components/AuthActionButton";
import { RedirectAuth } from "@/modules/auth/components/RedirectAuth";
import { useLoginUser } from "@/modules/auth/hooks/useLoginUser";
import { CenteredHeader } from "@/modules/shared/components/centered-header/CenteredHeader";
import { CenteredLayout } from "@/modules/shared/components/centered-layout/CenteredLayout";
import { CustomInput } from "@/modules/shared/components/custom-input/CustomInput";
import { AuthenticatedGuard } from "@/modules/shared/guards/AuthenticatedGuard";
import { Form } from "@/modules/shared/ui/form";

export default function LoginPage() {
	const { form, handleSubmit, isPending } = useLoginUser();

	return (
		<AuthenticatedGuard mode="guest">
			<CenteredLayout>
				<CenteredHeader
					title="Login"
					subtitle="Organiza tus gastos, cuida tu bolsillo."
				/>
				<Form {...form}>
					<form onSubmit={handleSubmit} className="space-y-5 w-full">
						<CustomInput
							control={form.control}
							name="email"
							label="Email"
							type="email"
							placeholder="Ingresa tu email"
						/>

						<CustomInput
							control={form.control}
							name="password"
							label="Contraseña"
							type="password"
							placeholder="Ingresa tu contraseña"
						/>

						<RedirectAuth
							href="/recover-password"
							text="¿Olvidaste tu contraseña?"
						/>

						<AuthActionButton disabled={isPending} />
					</form>
				</Form>
			</CenteredLayout>
		</AuthenticatedGuard>
	);
}
