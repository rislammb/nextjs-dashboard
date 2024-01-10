import { fetchFilteredCustomers } from '@/app/lib/data';
import { DeleteCustomer, UpdateCustomer } from '@/app/ui/customers/buttons';
import Image from 'next/image';
import Link from 'next/link';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {customers?.map((customer) => (
                <div
                  key={customer.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <div className="flex items-center gap-3">
                          <Link
                            className="transition-opacity hover:opacity-80"
                            href={`/dashboard/customers/${customer.id}`}
                          >
                            <Image
                              src={customer.image_url}
                              className="rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                          </Link>
                          <Link
                            className="text-blue-600 transition-colors hover:text-blue-400"
                            href={`/dashboard/customers/${customer.id}`}
                          >
                            {customer.name}
                          </Link>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateCustomer id={customer.id} />
                      <DeleteCustomer id={customer.id} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between py-5">
                    <div>
                      <p className="text-xs">Invoices</p>
                      <p className="font-medium">{customer.total_invoices}</p>
                    </div>
                    <div>
                      <p className="text-xs">Pending</p>
                      <p className="font-medium">{customer.total_pending}</p>
                    </div>
                    <div>
                      <p className="text-xs">Paid</p>
                      <p className="font-medium">{customer.total_paid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th
                    scope="col"
                    className="px-1.5 py-4 font-medium sm:pl-6 lg:px-3"
                  >
                    Name
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Email
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Total Invoices
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Total Pending
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Total Paid
                  </th>
                  <th
                    scope="col"
                    className="relative py-3 pl-3 pr-1.5 lg:pl-6 lg:pr-3"
                  >
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-gray-900">
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap bg-white px-2 py-5 text-sm lg:px-4">
                      <div className="flex items-center gap-3">
                        <Link
                          className="w-[28px] transition-opacity hover:opacity-80"
                          href={`/dashboard/customers/${customer.id}`}
                        >
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                        </Link>
                        <Link
                          className="text-blue-600 transition-colors hover:text-blue-800"
                          href={`/dashboard/customers/${customer.id}`}
                        >
                          {customer.name}
                        </Link>
                      </div>
                    </td>
                    <td className="whitespace-nowrap bg-white px-2 py-5 text-sm lg:px-4">
                      {customer.email}
                    </td>
                    <td className="whitespace-nowrap bg-white px-2 py-5 text-sm lg:px-4">
                      {customer.total_invoices}
                    </td>
                    <td className="whitespace-nowrap bg-white px-2 py-5 text-sm lg:px-4">
                      {customer.total_pending}
                    </td>
                    <td className="whitespace-nowrap bg-white px-2 py-5 text-sm lg:px-4">
                      {customer.total_paid}
                    </td>
                    <td className="whitespace-nowrap bg-white px-2 py-5 text-sm lg:px-4">
                      <div className="flex justify-end gap-1.5 lg:gap-3">
                        <UpdateCustomer id={customer.id} />
                        <DeleteCustomer id={customer.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
