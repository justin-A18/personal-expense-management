import { z } from 'zod';

export const loginSchema = z.object({
	email: z.email({ message: 'Por favor, ingresa um email válido.' }),
	password: z.string().min(6, {
		message: 'La contraseña debe tener al menos 6 caracteres.',
	}),
});
export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = loginSchema.extend({
	username: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
	confirmPassword: z.string().min(6, {
		message: 'La contraseña de confirmación debe tener al menos 6 caracteres.',
	}),
}).refine((data) => data.password === data.confirmPassword, {
	message: 'Las contraseñas no coinciden.',
	path: ['confirmPassword'],
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const recoverPasswordSchema = z.object({
	email: z.email({ message: 'Por favor, ingresa um email válido.' }),
});

export type RecoverPasswordSchema = z.infer<typeof recoverPasswordSchema>;

export const resetPasswordSchema = z.object({
	password: z.string().min(6, {
		message: 'La contraseña debe tener al menos 6 caracteres.',
	}),
	confirmPassword: z.string().min(6, {
		message: 'La contraseña de confirmación debe tener al menos 6 caracteres.',
	}),
}).refine((data) => data.password === data.confirmPassword, {
	message: 'Las contraseñas no coinciden.',
	path: ['confirmPassword'],
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;