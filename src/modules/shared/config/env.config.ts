import { z } from "zod";

const envVars = z.object({
	NEXT_PUBLIC_URL_BASE: z.string().url(),
});

export const env = envVars.parse({
	NEXT_PUBLIC_URL_BASE: process.env.NEXT_PUBLIC_URL_BASE,
});
