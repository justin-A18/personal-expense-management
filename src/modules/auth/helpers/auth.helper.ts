import { ACTIONS_AUTH_TYPE } from "../enums/auth.enum";

export const getLabelAuthButton = (type: ACTIONS_AUTH_TYPE) => {
	switch (type) {
		case 'login':
			return 'Iniciar sesión';
		case 'register':
			return 'Registrarse';
		case 'recover-password':
			return 'Enviar email';
		case 'reset-password':
			return 'Restablecer contraseña';
		case 'verify-account':
			return 'Volver al inicio';
		default:
			return 'Iniciar sesión';
	}
};