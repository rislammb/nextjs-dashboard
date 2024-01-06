'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const CustomerSchema = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name minimum 3 characters long.'),
  email: z.string().email('Email is not valid.'),
  imageUrl: z.string({
    invalid_type_error: 'Please select a image',
  }),
});

const CreateCustomer = CustomerSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    imageUrl?: string[];
  };
  message?: string | null;
};

export async function createCustomer(prevState: State, formData: FormData) {
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Faild to Create Customer.',
    };
  }

  const { name, email, imageUrl } = validatedFields.data;

  try {
    await sql`INSERT INTO customers (name, email, image_url)
    VALUES (${name}, ${email}, ${imageUrl})
    `;
  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Faild to Create Customer.',
    };
  }

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

export async function updateCustomer(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Faild to Update Customer',
    };
  }

  const { name, email, imageUrl } = validatedFields.data;

  try {
    await sql`UPDATE customers
      SET name = ${name}, email = ${email}, image_url = ${imageUrl}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Faild to Updata Customer' };
  }

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

export async function deleteCustomer(id: string) {
  try {
    await sql`
      DELETE FROM customers
      WHERE customers.id=${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Faild to Delete Customer.' };
  }
  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}
