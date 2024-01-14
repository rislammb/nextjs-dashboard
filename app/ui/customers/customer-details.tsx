import { fetchCustomerById } from '@/app/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { lusitana } from '../fonts';
import { UpdateCustomer } from './buttons';

export default async function CustomerDetails({ id }: { id: string }) {
  const customer = await fetchCustomerById(id);

  if (!customer) {
    return notFound();
  }

  return (
    <div className="relative mt-6 flex w-full flex-col items-center">
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

      <table className="mt-3">
        <tbody>
          <tr>
            <th className="p-1 text-left font-medium">Email:</th>
            <td className="p-1">{customer.email}</td>
          </tr>
          <tr>
            <th className="p-1 text-left font-medium">Total Invoices:</th>
            <td className="p-1">{customer.total_invoices}</td>
          </tr>
          <tr>
            <th className="p-1 text-left font-medium">Total Pending:</th>
            <td className="p-1">{customer.total_pending}</td>
          </tr>
          <tr>
            <th className="p-1 text-left font-medium">Total Paid:</th>
            <td className="p-1">{customer.total_paid}</td>
          </tr>
        </tbody>
      </table>

      <div className="absolute right-0 top-0 flex">
        <UpdateCustomer id={customer.id} />
      </div>
    </div>
  );
}
