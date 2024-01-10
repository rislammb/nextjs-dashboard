import { fetchCustomerInvoices } from '@/app/lib/data';
import { CustomerInvoicesType } from '@/app/lib/definitions';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import { DeleteInvoice, UpdateInvoice } from '../invoices/buttons';
import InvoiceStatus from '../invoices/status';

export default async function CustomerInvoices({ id }: { id: string }) {
  const invoices = await fetchCustomerInvoices(id);

  return (
    <div className="w-full flex-1 overflow-auto rounded-lg bg-gray-50 p-2 md:pt-0">
      <table className="w-full rounded-md text-gray-900 ">
        <thead>
          <tr className="py-3">
            <th scope="col" className="px-2 py-3 text-left font-medium md:px-4">
              Date
            </th>
            <th
              scope="col"
              className="px-2  py-3 text-left font-medium md:px-4"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-2  py-3 text-left font-medium md:px-4"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-2  py-3 text-left font-medium md:px-4"
            >
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {invoices?.length > 0 ? (
            invoices.map((invoice: CustomerInvoicesType) => (
              <tr
                key={invoice.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
                  {formatDateToLocal(invoice.date)}
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
                  {formatCurrency(invoice.amount)}
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
                  <InvoiceStatus status={invoice.status} />
                </td>
                <td className="whitespace-nowrap px-2 py-3 md:px-4">
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
                colSpan={4}
              >
                No invoice found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
