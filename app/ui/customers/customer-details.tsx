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
    <div className="relative mt-6 flex flex-1 flex-col items-center">
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
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Email:</div>
          <div>{customer.email}</div>
        </li>
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Total Invoices:</div>
          <div>{customer.total_invoices}</div>
        </li>
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Total Pending:</div>
          <div>{customer.total_pending}</div>
        </li>
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Total Paid:</div>
          <div>{customer.total_paid}</div>
        </li>
      </ul>

      <div className="absolute right-0 top-0 flex">
        <UpdateCustomer id={customer.id} />
      </div>
    </div>
  );
}
