import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import EditInvoiceForm from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    return notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Invoices',
            href: '/dashboard/invoices',
          },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
