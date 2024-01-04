import LoginForm from '@/app/ui/login-form';
import AcmeLogo from '@/app/ui/shared/acme-logo';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Link
          href={'/'}
          className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36"
        >
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </Link>
        <LoginForm />
      </div>
    </main>
  );
}
