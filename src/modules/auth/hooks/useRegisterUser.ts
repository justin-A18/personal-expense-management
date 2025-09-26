import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "../schemas/auth.schema";

export const useRegisterUser = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (values: RegisterSchema) => {
		console.log(values);
		router.push('/');
	};

	return {
		form,
		onSubmit,
	};
};
