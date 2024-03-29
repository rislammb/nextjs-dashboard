import { deleteCustomer } from '@/app/lib/actions/customer-actions';
import DeleteButton from '@/app/ui/shared/delete-button';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:cursor-not-allowed focus:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Customers</span>
      <PlusIcon className="h-5 md:ml-2" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customers/${id}/edit`}
      className={
        'rounded-md border p-1.5 text-blue-600 transition-all hover:border-gray-300 hover:text-blue-400 focus:cursor-not-allowed focus:opacity-50'
      }
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id, text }: { id: string; text?: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);

  return (
    <form action={deleteCustomerWithId}>
      <DeleteButton text={text} />
    </form>
  );
}
