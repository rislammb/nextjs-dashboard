'use client';

import { updateCustomer } from '@/app/lib/actions/customer-actions';
import { Customer } from '@/app/lib/definitions';
import { imageUrls } from '@/app/lib/utils';
import {
  EnvelopeIcon,
  PhotoIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '../shared/button';

export default function EditCustomerForm({ customer }: { customer: Customer }) {
  const initialState = { message: null, errors: {} };
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  const [state, dispatch] = useFormState(updateCustomerWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-gray-300 focus:shadow-sm focus:ring-0"
              placeholder="Abdullah..."
              defaultValue={customer.name}
              aria-describedby="name-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-gray-300 focus:shadow-sm focus:ring-0"
              defaultValue={customer.email}
              placeholder="test@email.com"
              aria-describedby="email-error"
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Customer Image Url */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
            Choose Image Url
          </label>
          <div className="relative">
            <select
              name="imageUrl"
              id="imageUrl"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-gray-300 focus:shadow-sm focus:ring-0"
              defaultValue={customer.image_url}
              aria-describedby="url-error"
            >
              <option value="" disabled>
                Select a Image
              </option>
              {imageUrls.map((url: string) => (
                <option value={url} key={url}>
                  {url}
                </option>
              ))}
            </select>
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.imageUrl &&
              state.errors.imageUrl.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>

        <div className="mt-6 flex items-center justify-end gap-4">
          <Link
            href={'/dashboard/customers'}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <EditCustomer />
        </div>
      </div>
    </form>
  );
}

function EditCustomer() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending}>
      Edit Customer
    </Button>
  );
}
