import { deleteCustomer } from '@/app/lib/customer-actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Customers</span>
      <PlusIcon className="h-5 md:ml-2" />
    </Link>
  );
}

export function UpdateCustomer({ id, text }: { id: string; text?: string }) {
  return (
    <Link
      href={`/dashboard/customers/${id}/edit`}
      className={clsx(
        'rounded-md border p-1.5 text-blue-600 transition-all hover:border-gray-300 hover:text-blue-400',
        {
          'flex items-center gap-2': text,
        },
      )}
    >
      <PencilIcon className="w-5" />
      {text && <span>{text}</span>}
    </Link>
  );
}

export function DeleteCustomer({ id, text }: { id: string; text?: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);

  return (
    <form action={deleteCustomerWithId}>
      <button
        className={clsx(
          'rounded-md border p-1.5 text-red-500 transition-all hover:border-gray-300 hover:text-red-400',
          { 'flex items-center gap-2': text },
        )}
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
        {text && <span>{text}</span>}
      </button>
    </form>
  );
}
