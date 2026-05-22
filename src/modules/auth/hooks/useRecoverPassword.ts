import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RecoverPasswordSchema, recoverPasswordSchema } from "../schemas/auth.schema";
import { resetPassword } from "../services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRecoverPassword = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(recoverPasswordSchema),
		defaultValues: {
			email: '',
		},
		mode: 'onChange',
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (email: string) => resetPassword(email),
		onSuccess: () => {
			router.push('/recover-password/success');
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = async (values: RecoverPasswordSchema) => {
		await mutateAsync(values.email);
	};

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending
	};
};
