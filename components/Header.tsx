'use client';

import NavLinks from './NavLinks';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <NavLinks />,

      <Link href="/login">
        Admin Login
      </Link>
    </header>
  );
}
