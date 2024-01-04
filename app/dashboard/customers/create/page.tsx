import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Customers',
            href: '/dashboard/customers',
          },
          {
            label: 'Create Customers',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />

      <Form />
    </main>
  );
}
