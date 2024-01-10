import { DeleteCustomer } from '@/app/ui/customers/buttons';
import CustomerDetails from '@/app/ui/customers/customer-details';
import CustomerInvoices from '@/app/ui/customers/customer-invoices';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import {
  CustomerInvoicesSkeleton,
  DetailsCustomerSkeleton,
} from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Details Customer',
};

export default async function CustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

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
            href: `/dashboard/customers/${id}`,
            active: true,
          },
        ]}
      />

      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:gap-12">
        <Suspense fallback={<DetailsCustomerSkeleton />}>
          <CustomerDetails id={id} />
        </Suspense>
        <Suspense fallback={<CustomerInvoicesSkeleton />}>
          <CustomerInvoices id={id} />
        </Suspense>
      </div>

      <div className="mt-8 flex justify-center">
        <DeleteCustomer id={id} text="Customer" />
      </div>
    </main>
  );
}
