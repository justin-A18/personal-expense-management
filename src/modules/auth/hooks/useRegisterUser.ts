import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { RegisterUserBody } from "../interfaces/request";
import { type RegisterSchema, registerSchema } from "../schemas/auth.schema";
import { registerUser } from "../services/auth.service";

export const useRegisterUser = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onChange",
	});

	const onSubmit = async (values: RegisterSchema) => {
		const { confirmPassword, ...rest } = values;
		await mutateAsync(rest);
	};

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: RegisterUserBody) => registerUser(body),
		onSuccess: () => {
			router.push("/register/verify-email");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending,
	};
};
