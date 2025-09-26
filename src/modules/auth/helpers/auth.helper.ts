import { ACTIONS_AUTH_TYPE } from "../enums/auth.enum";

export const getLabelAuthButton = (type: ACTIONS_AUTH_TYPE) => {
	switch (type) {
		case 'login':
			return 'Iniciar Sesión';
		case 'register':
			return 'Registrarse';
		case 'recover-password':
			return 'Enviar Email';
		case 'reset-password':
			return 'Restablecer Contraseña';
		default:
			return 'Iniciar Sesión';
	}
};