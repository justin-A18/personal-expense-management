import { UserEntity } from "@/modules/shared/interfaces/entities/user.entity";

export interface LoginUserResponse {
	token: string;
	user: UserEntity;
}
