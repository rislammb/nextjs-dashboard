import { fetchCustomerInvoicesPages } from '@/app/lib/data';
import { DeleteCustomer } from '@/app/ui/customers/buttons';
import CustomerDetails from '@/app/ui/customers/customer-details';
import CustomerInvoices from '@/app/ui/customers/customer-invoices';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import Pagination from '@/app/ui/shared/pagination';
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
  searchParams,
}: {
  params: { id: string };
  searchParams: { page: string };
}) {
  const id = params.id;
  const currentPage = Number(searchParams.page) || 1;

  const totalPages = await fetchCustomerInvoicesPages(id);

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

      <div className="flex flex-col items-center justify-center gap-6 whitespace-nowrap lg:flex-row lg:gap-12">
        <Suspense fallback={<DetailsCustomerSkeleton />}>
          <CustomerDetails id={id} />
        </Suspense>
        <div className="flex flex-col overflow-y-auto items-center gap-2">
          <Suspense fallback={<CustomerInvoicesSkeleton />}>
            <CustomerInvoices id={id} currentPage={currentPage} />
          </Suspense>
          <Pagination totalPages={totalPages} />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <DeleteCustomer id={id} text="Customer" />
      </div>
    </main>
  );
}
