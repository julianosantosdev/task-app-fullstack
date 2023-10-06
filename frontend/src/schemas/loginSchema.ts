import { z } from 'zod';

const loginValidateSchema = z.object({
  email: z.string().email('It must have email format!'),
  password: z.string().min(1, 'Password is required!'),
});

type TLoginValidate = z.infer<typeof loginValidateSchema>;

export default loginValidateSchema;
export type { TLoginValidate };
