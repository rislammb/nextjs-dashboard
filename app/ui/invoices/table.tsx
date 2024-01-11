import { fetchFilteredInvoices } from '@/app/lib/data';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import Image from 'next/image';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {invoices?.length > 0 ? (
                invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <Image
                            src={invoice.image_url}
                            className="mr-2 rounded-full"
                            width={28}
                            height={28}
                            alt={`${invoice.name}'s profile picture`}
                          />
                          <p>{invoice.name}</p>
                        </div>
                        <p className="text-sm text-gray-500">{invoice.email}</p>
                      </div>
                      <InvoiceStatus status={invoice.status} />
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div>
                        <p className="text-xl font-medium">
                          {formatCurrency(invoice.amount)}
                        </p>
                        <p>{formatDateToLocal(invoice.date)}</p>
                      </div>
                      <div className="flex justify-end gap-2">
                        <UpdateInvoice id={invoice.id} />
                        <DeleteInvoice id={invoice.id} />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-md bg-white p-4">
                  <p className="text-center text-yellow-600">
                    No invoice found!
                  </p>
                </div>
              )}
            </div>

            <table className="hidden min-w-full rounded-md  text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th
                    scope="col"
                    className="py-6 pl-4 pr-2 font-medium lg:px-4"
                  >
                    Customer
                  </th>
                  <th scope="col" className="px-2 py-6 font-medium lg:px-4">
                    Email
                  </th>
                  <th scope="col" className="px-2 py-6 font-medium lg:px-4">
                    Amount
                  </th>
                  <th scope="col" className="px-2 py-6 font-medium lg:px-4">
                    Date
                  </th>
                  <th scope="col" className="px-2 py-6 font-medium lg:px-4">
                    Status
                  </th>
                  <th scope="col" className="relative py-6 pl-2 pr-4 lg:px-4">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {invoices?.length > 0 ? (
                  invoices.map((invoice) => (
                    <tr
                      key={invoice.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap py-3 pl-4 pr-8 lg:px-4">
                        <div className="flex w-full items-center gap-2">
                          <Image
                            src={invoice.image_url}
                            className="rounded-full"
                            width={28}
                            height={28}
                            alt={`${invoice.name}'s profile picture`}
                          />
                          <p>{invoice.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-2 py-3 lg:px-4">
                        {invoice.email}
                      </td>
                      <td className="whitespace-nowrap px-2 py-3 lg:px-4">
                        {formatCurrency(invoice.amount)}
                      </td>
                      <td className="whitespace-nowrap px-2 py-3 lg:px-4">
                        {formatDateToLocal(invoice.date)}
                      </td>
                      <td className="whitespace-nowrap px-2 py-3 lg:px-4">
                        <InvoiceStatus status={invoice.status} />
                      </td>
                      <td className="whitespace-nowrap py-3 pl-2 pr-4 lg:pl-4 lg:pr-6">
                        <div className="flex justify-end gap-1.5 lg:gap-3">
                          <UpdateInvoice id={invoice.id} />
                          <DeleteInvoice id={invoice.id} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td
                      colSpan={6}
                      className="whitespace-nowrap bg-white px-3 py-6 text-sm"
                    >
                      <p className="text-center text-yellow-600">
                        No invoice found!
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
