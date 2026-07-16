'use client';

import Link from 'next/link';

export default function NavLinks() {
  return (
    <nav className="flex items-center justify-between p-4">

      <div className="flex gap-6">

        <Link href="/">
          Home
        </Link>

        <Link href="/meetings">
          Meetings
        </Link>

        <Link href="/meetings/current">
          Current Meeting
        </Link>

      </div>

    </nav>
  );
}