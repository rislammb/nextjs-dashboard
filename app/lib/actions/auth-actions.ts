'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email('Email is not valid!'),
  password: z.string().min(6, 'Password minimum 6 characters long!'),
});

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function authenticate(prevState: State, formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Missing Fields. Faild to login!',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  } else {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return {
              message: 'Invalid credentials!',
            };
          default:
            return {
              message: 'Something went wrong!',
            };
        }
      }
      throw error;
    }
  }
}
