import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAuthStore } from "@/modules/shared/store/useAuthStore";
import type { LoginUserBody } from "../interfaces/request";
import { type LoginSchema, loginSchema } from "../schemas/auth.schema";
import { loginUser } from "../services/auth.service";

export const useLoginUser = () => {
	const setAuth = useAuthStore((state) => state.setAuth);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const onSubmit = async (values: LoginSchema) => {
		await mutateAsync(values);
	};

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: LoginUserBody) => loginUser(body),
		onSuccess: (data) => {
			setAuth(data.data);
			router.push("/wallets");
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
