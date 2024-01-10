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
              {invoices?.map((invoice) => (
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
              ))}
            </div>

            <table className="hidden min-w-full rounded-md  text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th
                    scope="col"
                    className="px-1.5 py-4 font-medium sm:pl-6 lg:px-3"
                  >
                    Customer
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Email
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Amount
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Date
                  </th>
                  <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                    Status
                  </th>
                  <th
                    scope="col"
                    className="relative py-3 pl-3 pr-1.5 lg:pl-6 lg:pr-3"
                  >
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
                      <td className="whitespace-nowrap py-3 pl-3 pr-1.5 lg:pl-6 lg:pr-3">
                        <div className="flex items-center gap-3">
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
                      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                        {invoice.email}
                      </td>
                      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                        {formatCurrency(invoice.amount)}
                      </td>
                      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                        {formatDateToLocal(invoice.date)}
                      </td>
                      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                        <InvoiceStatus status={invoice.status} />
                      </td>
                      <td className="whitespace-nowrap py-3 pl-3 pr-1.5 lg:pl-6 lg:pr-3">
                        <div className="flex justify-end gap-1.5 lg:gap-3">
                          <UpdateInvoice id={invoice.id} />
                          <DeleteInvoice id={invoice.id} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="py-3">
                    <td
                      className="rounded-lg py-3 text-center text-yellow-600"
                      colSpan={6}
                    >
                      No invoice found!
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
