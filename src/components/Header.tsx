'use client';

import React from 'react';
import { CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavItem } from '@coreui/react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  id: number;
  text: string;
  href: string;
}

const Header = () => {
  const navItems: NavItem[] = [
    { id: 0, text: 'Oplossingen', href: '/' },
    { id: 1, text: 'Voor wie', href: '/' },
    { id: 2, text: 'Resources', href: '/' },
    { id: 3, text: 'Klantcases', href: '/' },
    { id: 4, text: 'Over Bastion', href: '/' },
  ];

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-white shadow-sm">
      <CContainer xxl>
        <CNavbarBrand href="/">
          <Image src="/bastion365-logo.png" alt="Bastion365 Logo" width={300} height={40} />
        </CNavbarBrand>
        <CNavbarNav className="ms-auto">
          {navItems.map((item) => (
            <CNavItem key={item.id}>
              <Link href={item.href} passHref legacyBehavior>
                <a className="nav-link">{item.text}</a>
              </Link>
            </CNavItem>
          ))}
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default Header;
