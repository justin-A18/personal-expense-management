import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "../schemas/auth.schema";
import { registerUser } from "../services/auth.service";
import { RegisterUserBody } from "../interfaces/request";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
	});

	const onSubmit = async (values: RegisterSchema) => {
		const { confirmPassword, ...rest } = values;
		await mutateAsync(rest);
	};

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: RegisterUserBody) => registerUser(body),
		onSuccess: () => {
			router.push('/register/verify-email');
		}
	});

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending
	};
};
