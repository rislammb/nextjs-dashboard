'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { useFormStatus } from 'react-dom';

export default function DeleteButton({ text }: { text?: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      className="flex gap-1 rounded-md border p-1.5 text-red-500 transition-all hover:border-gray-300 hover:text-red-400 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
      {text && <span>{text}</span>}
    </button>
  );
}
