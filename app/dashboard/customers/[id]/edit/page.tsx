import { fetchCustomerById } from '@/app/lib/data';
import EditCustomerForm from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Customer',
};

export default async function Page({ params }: { params: { id: string } }) {
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
            label: 'Edit Customer',
            href: `/dashboard/customers/${params.id}/edit`,
            active: true,
          },
        ]}
      />

      <EditCustomerForm customer={customer} />
    </main>
  );
}
