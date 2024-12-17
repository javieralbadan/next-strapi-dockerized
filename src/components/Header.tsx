'use client';

import React from 'react';
import { CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavItem, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  id: number;
  text: string;
  href: string;
  subItems?: NavItem[];
}

const Header = () => {
  // TODO: Fetch items from CMS
  const NAV_ITEMS: NavItem[] = [
    {
      id: 0,
      text: 'Oplossingen',
      href: '#',
      subItems: [
        { id: 10, text: 'Veilig mailen', href: '/veilig-mailen/' },
        { id: 11, text: 'Veilig bestanden delen', href: '/veilig-bestanden-versturen/' },
      ],
    },
    {
      id: 1,
      text: 'Voor wie',
      href: '#',
      subItems: [
        { id: 20, text: 'Zorg', href: '/voor-de-zorg/' },
        { id: 21, text: 'Overheid', href: '/voor-de-overheid/' },
        { id: 22, text: 'Juridische sector', href: '/voor-de-juridische-sector/' },
      ],
    },
    {
      id: 2,
      text: 'Resources',
      href: '#',
      subItems: [
        { id: 30, text: 'Kennisbank', href: '/kennisbank/' },
        { id: 31, text: 'Blog', href: '/blog/' },
        { id: 32, text: 'Events', href: '/webinars/' },
        { id: 33, text: 'Whitepapers', href: '/whitepapers/' },
      ],
    },
    { id: 3, text: 'Klantcases', href: '/klantcases/' },
    {
      id: 4,
      text: 'Over Bastion',
      href: '#',
      subItems: [
        { id: 40, text: 'Over ons', href: '/over-bastion/' },
        { id: 41, text: 'Partners', href: '/partners/' },
        { id: 42, text: 'Vacatures', href: '/vacatures/' },
        { id: 43, text: 'Contact', href: '/contact/' },
      ],
    },
  ];

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-white shadow-sm">
      <CContainer xxl>
        <CNavbarBrand href="/">
          <Image src="/bastion365-logo.png" alt="Bastion365 Logo" width={300} height={40} />
        </CNavbarBrand>
        <CNavbarNav className="ms-auto">
          {NAV_ITEMS.map((item) => (
            item.subItems ? (
              <CDropdown variant="nav-item" key={item.id}>
                <CDropdownToggle caret>{item.text}</CDropdownToggle>
                <CDropdownMenu>
                  {item.subItems.map((subItem) => (
                    <CDropdownItem key={subItem.id} href={subItem.href}>
                      {subItem.text}
                    </CDropdownItem>
                  ))}
                </CDropdownMenu>
              </CDropdown>
            ) : (
              <CNavItem key={item.id}>
                <Link href={item.href} passHref legacyBehavior>
                  <a className="nav-link">{item.text}</a>
                </Link>
              </CNavItem>
            )
          ))}
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default Header;
