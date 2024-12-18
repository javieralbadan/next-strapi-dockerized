'use client';

import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import ClientLogos from '../components/ClientLogos';
import { getClientLogos } from '../api/clientLogos';
import { ClientLogo } from '@/types/ClientLogo';

const HomePage = () => {
  const [logos, setLogos] = useState<ClientLogo[] | []>([]);

  useEffect(() => {
    const fecthLogos = async () => {
      try {
        const data = await getClientLogos();
        setLogos(data);
      } catch (error) {
        console.log('🚀 ~ fecthLogos ~ error:', error);
      }
    }

    fecthLogos();
  }, []);

  return (
    <div>
      <Banner />
      <ClientLogos logos={logos} />
    </div>
  );
};

export default HomePage;
