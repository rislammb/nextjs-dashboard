import { fetchCustomerById } from '@/app/lib/data';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import { DeleteCustomer, UpdateCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function CustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const customer = await fetchCustomerById(params.id);

  if (!customer) {
    return notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Customers',
            href: '/dashboard/customers',
          },
          {
            label: 'Customer Details',
            href: `/dashboard/customers/${params.id}`,
            active: true,
          },
        ]}
      />

      <div className="flex flex-col items-center gap-4 p-4 md:p-8 lg:flex-row lg:gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={customer.image_url}
            width={98}
            height={98}
            alt={customer.name}
            className="rounded-full border"
          />
          <h2 className={`${lusitana.className} mt-3 text-4xl md:mt-8`}>
            {customer.name}
          </h2>

          <ul className="mt-3">
            <li className="grid grid-cols-2 p-1">
              <div>Email:</div>
              <div>{customer.email}</div>
            </li>
            <li className="grid grid-cols-2 p-1">
              <div>Total Invoices:</div>
              <div>{customer.total_invoices}</div>
            </li>
            <li className="grid grid-cols-2 p-1">
              <div>Total Pending:</div>
              <div>{customer.total_pending}</div>
            </li>
            <li className="grid grid-cols-2 p-1">
              <div>Total Paid:</div>
              <div>{customer.total_paid}</div>
            </li>
          </ul>
        </div>

        <div className="w-full overflow-auto rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="w-full rounded-md text-gray-900 ">
            <thead>
              <tr className="py-3">
                <th
                  scope="col"
                  className="px-1.5 py-3 text-left font-medium lg:px-3"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-1.5  py-3 text-left font-medium lg:px-3"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-1.5  py-3 text-left font-medium lg:px-3"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-1.5  py-3 text-left font-medium lg:px-3"
                >
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {customer.invoices.length > 0 &&
                customer.invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                      {formatDateToLocal(invoice.date)}
                    </td>
                    <td className="px-3 py-1.5 text-sm font-medium">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                      <InvoiceStatus status={invoice.status} />
                    </td>
                    <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
                      <div className="flex justify-end gap-1.5 lg:gap-3">
                        <UpdateInvoice id={invoice.id} />
                        <DeleteInvoice id={invoice.id} />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-3">
        <DeleteCustomer id={customer.id} text="Customer" />
        <UpdateCustomer id={customer.id} text="Customer" />
      </div>
    </main>
  );
}
