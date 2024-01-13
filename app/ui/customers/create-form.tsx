'use client';

import { createCustomer } from '@/app/lib/actions/customer-actions';
import { imageUrls } from '@/app/lib/utils';
import { Button } from '@/app/ui/shared/button';
import {
  EnvelopeIcon,
  PhotoIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createCustomer, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-lg bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-6">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Customer Name
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-gray-300 focus:ring-0 focus:drop-shadow"
              id="name"
              type="text"
              name="name"
              placeholder="Enter customer name"
              aria-describedby="name-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Customer Email */}
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-gray-300 focus:ring-0 focus:drop-shadow"
              id="email"
              type="text"
              name="email"
              placeholder="Enter customer email"
              aria-describedby="email-error"
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
            Choose Image Url
          </label>
          <div className="relative">
            <select
              name="imageUrl"
              id="imageUrl"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-gray-300 focus:ring-0 focus:drop-shadow"
              defaultValue=""
              aria-describedby="image-error"
            >
              <option value="" disabled>
                Select a Image
              </option>
              {imageUrls.map((url) => (
                <option key={url} value={url}>
                  {url}
                </option>
              ))}
            </select>
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.imageUrl &&
              state.errors.imageUrl.map((error: string) => (
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

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/customers"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 focus:cursor-not-allowed focus:opacity-50"
          >
            Cancel
          </Link>
          <CreateButton />
        </div>
      </div>
    </form>
  );
}

function CreateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending}>
      Create Customer
    </Button>
  );
}
