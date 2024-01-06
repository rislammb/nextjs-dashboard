import { fetchCustomerById } from '@/app/lib/data';
import { DeleteCustomer, UpdateCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
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

      <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 md:p-10">
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

        <table className="mt-6">
          <tr>
            <th className="p-2 text-left font-medium md:px-4">Email</th>
            <td className="p-2 md:px-4">{customer.email}</td>
          </tr>
          <tr>
            <th className="p-2 text-left font-medium md:px-4">
              Total Invoices
            </th>
            <td className="p-2 md:px-4">{customer.total_invoices}</td>
          </tr>
          <tr>
            <th className="p-2 text-left font-medium md:px-4">Total Pending</th>
            <td className="p-2 md:px-4">{customer.total_pending}</td>
          </tr>
          <tr>
            <th className="p-2 text-left font-medium md:px-4">Total Paid</th>
            <td className="p-2 md:px-4">{customer.total_paid}</td>
          </tr>
        </table>

        <div className="m-6 flex gap-3">
          <DeleteCustomer id={customer.id} />
          <UpdateCustomer id={customer.id} />
        </div>
      </div>
    </main>
  );
}
