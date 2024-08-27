'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface FooterProps {
  page?: string;
  color?: string;
}

const Footer = ({ page, color }: FooterProps) => {
  const pathname = usePathname(); // check https://nextjs.org/docs/app/api-reference/functions/use-pathname

  return (
    <footer>
      {pathname !== 'contact' && (
        <div>
          <Link
            className="p-2 bg-accept-green"
            href="https://clubs.ssfinc.ca/feeds?type=club&type_id=35536"
            target="_blank"
            rel="noopener noreferrer" // Security measure
          >
            JOIN CLUB
          </Link>
        </div>
      )}
    </footer>
  );
};

export default Footer;
