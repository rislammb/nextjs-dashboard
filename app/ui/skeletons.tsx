// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 hidden h-4 w-12 rounded-md bg-gray-200 sm:block" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-3 pr-1.5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
        <div className="h-6 w-20 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-1.5 py-3 lg:px-3">
        <div className="h-6 w-16 rounded-full bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-3 pr-1.5">
        <div className="flex justify-end gap-3">
          <div className="h-8 w-8 rounded bg-blue-50"></div>
          <div className="h-8 w-8 rounded bg-red-50"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div>
          <div className="mb-2 flex items-center">
            <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
            <div className="h-6 w-16 rounded bg-gray-100"></div>
          </div>
          <div className="h-4 w-28 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded-full bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-8 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-8 w-8 rounded bg-blue-50"></div>
          <div className="h-8 w-8 rounded bg-red-50"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function CustomersTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name */}
      <td className="relative overflow-hidden whitespace-nowrap px-2 py-5 text-sm lg:px-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-blue-50"></div>
          <div className="h-6 w-24 rounded bg-blue-50"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-2 py-5 text-sm lg:px-4">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Total Invoices */}
      <td className="whitespace-nowrap px-2 py-5 text-sm lg:px-4">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      {/* Total Pending */}
      <td className="whitespace-nowrap px-2 py-5 text-sm lg:px-4">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Total Paid */}
      <td className="whitespace-nowrap px-2 py-5 text-sm lg:px-4">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap px-2 py-5 text-sm lg:px-4">
        <div className="flex justify-end gap-3">
          <div className="h-8 w-8 rounded bg-blue-50"></div>
          <div className="h-8 w-8 rounded bg-red-50"></div>
        </div>
      </td>
    </tr>
  );
}

export function CustomersMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <div className="mb-2 flex items-center">
            <div className="mr-2 h-8 w-8 rounded-full bg-blue-50"></div>
            <div className="h-6 w-24 rounded bg-blue-50"></div>
          </div>
          <div className="h-4 w-28 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-8 w-8 rounded bg-blue-50"></div>
          <div className="h-8 w-8 rounded bg-red-50"></div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between py-5">
        <div>
          <div className="h-4 w-12 rounded bg-gray-100"></div>
          <div className="mt-1 h-6 w-8 rounded bg-gray-100"></div>
        </div>
        <div>
          <div className="h-4 w-12 rounded bg-gray-100"></div>
          <div className="mt-1 h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div>
          <div className="h-4 w-8 rounded bg-gray-100"></div>
          <div className="mt-1 h-6 w-16 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function CustomersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
            <CustomersMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th
                  scope="col"
                  className="px-1.5 py-4 font-medium sm:pl-6 lg:px-3"
                >
                  Name
                </th>
                <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                  Email
                </th>
                <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                  Total Invoices
                </th>
                <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                  Total Pending
                </th>
                <th scope="col" className="px-1.5 py-4 font-medium lg:px-3">
                  Total Paid
                </th>
                <th
                  scope="col"
                  className="relative py-3 pl-3 pr-1.5 lg:pl-6 lg:pr-3"
                >
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <CustomersTableRowSkeleton />
              <CustomersTableRowSkeleton />
              <CustomersTableRowSkeleton />
              <CustomersTableRowSkeleton />
              <CustomersTableRowSkeleton />
              <CustomersTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function DetailsCustomerSkeleton() {
  return (
    <div className="relative mt-6 flex flex-1 flex-col items-center">
      <div className="h-[98px] w-[98px] rounded-full bg-gray-100"></div>
      <div className="mt-3 h-10 w-[210px] rounded bg-gray-100 md:mt-8"></div>

      <ul className="mt-3">
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Email:</div>
          <div className="h-6 w-36 rounded bg-gray-100"></div>
        </li>
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Total Invoices:</div>
          <div className="h-6 w-12 rounded bg-gray-100"></div>
        </li>
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Total Pending:</div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </li>
        <li className="grid grid-cols-2 gap-2 p-1">
          <div>Total Paid:</div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </li>
      </ul>

      <div className="absolute right-0 top-0 flex h-8 w-8 rounded bg-blue-50"></div>
    </div>
  );
}

function CustomerInvoicesRow() {
  return (
    <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
        <div className="h-6 w-20 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
        <div className="h-6 w-20 rounded-full bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 text-sm font-medium md:px-4">
        <div className="flex justify-end gap-1.5 lg:gap-3">
          <div className="h-8 w-8 rounded bg-blue-50"></div>
          <div className="h-8 w-8 rounded bg-red-50"></div>
        </div>
      </td>
    </tr>
  );
}

export function CustomerInvoicesSkeleton() {
  return (
    <div className="w-full flex-1 overflow-auto rounded-lg bg-gray-50 p-2 md:pt-0">
      <table className="w-full rounded-md text-gray-900 ">
        <thead>
          <tr className="py-3">
            <th scope="col" className="px-2 py-3 text-left font-medium md:px-4">
              Date
            </th>
            <th
              scope="col"
              className="px-2  py-3 text-left font-medium md:px-4"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-2  py-3 text-left font-medium md:px-4"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-2  py-3 text-left font-medium md:px-4"
            >
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <CustomerInvoicesRow />
          <CustomerInvoicesRow />
          <CustomerInvoicesRow />
          <CustomerInvoicesRow />
        </tbody>
      </table>
    </div>
  );
}
