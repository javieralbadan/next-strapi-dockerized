'use client';

import React from 'react';
import { CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavItem, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  lang: string;
  menu: NavItem[];
}

interface NavItem {
  id: number;
  text: string;
  href: string;
  navSubItems?: NavItem[];
}

const Header = ({ lang, menu }: Props) => {
  console.log('🚀 ~ Header ~ menu:', menu);

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-white shadow-sm">
      <CContainer xxl>
        <CNavbarBrand href="/">
          <Image src="/bastion365-logo.png" alt="Bastion365 Logo" width={300} height={40} />
        </CNavbarBrand>
        <CNavbarNav className="ms-auto">
          {menu.map((item) => (
            item.navSubItems ? (
              <CDropdown variant="nav-item" key={item.id}>
                <CDropdownToggle caret>{item.text}</CDropdownToggle>
                <CDropdownMenu>
                  {item.navSubItems.map((subItem) => (
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
          <CNavItem>
            <Link href={`/${lang === 'en' ? 'nl' : 'en'}`} className="nav-link"  passHref legacyBehavior>
              <a className="nav-link">{lang === 'en' ? 'nl' : 'en'}</a>
            </Link>
          </CNavItem>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default Header;
