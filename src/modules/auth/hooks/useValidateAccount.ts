import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { verifyEmail } from "../services/auth.service";
import { useRouter } from "next/navigation";

export const useValidateAccount = () => {
	const params = useParams<{ token: string; }>();
	const router = useRouter();

	const goToLogin = () => {
		router.push('/');
	};

	const { data, isFetching, isError } = useQuery({
		queryKey: ['validate-account', params.token],
		queryFn: () => verifyEmail(params.token),
	});

	return {
		data,
		isFetching,
		goToLogin,
		isError
	};
};
