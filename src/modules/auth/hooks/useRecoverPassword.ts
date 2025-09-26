import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RecoverPasswordSchema, recoverPasswordSchema } from "../schemas/auth.schema";

export const useRecoverPassword = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(recoverPasswordSchema),
		defaultValues: {
			email: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (values: RecoverPasswordSchema) => {
		console.log(values);
		router.push('/reset-password');
	};

	return {
		form,
		onSubmit,
	};
};
