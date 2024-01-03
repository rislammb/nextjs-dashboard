import { fetchUserById } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function CustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const customer = await fetchUserById(params.id);

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

      <div className="flex flex-col items-center">
        <Image
          src={customer.image_url}
          width={98}
          height={98}
          alt={customer.name}
          className="rounded-full"
        />
        <h2 className={`${lusitana.className} mt-4 text-4xl md:mt-8`}>
          {customer.name}
        </h2>
        <h6 className="mt-2 text-xl">Email: {customer.email}</h6>
      </div>
    </main>
  );
}
