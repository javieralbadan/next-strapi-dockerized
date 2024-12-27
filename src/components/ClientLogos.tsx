'use client';

import { ClientLogo } from '@/types/ClientLogo';
import { CContainer } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import StrapiImage from './StrapiImage';
import { getClientLogos } from '@/api/clientLogos';

const ClientLogos = ({ lang }: { lang: string }) => {
  const [logos, setLogos] = useState<ClientLogo[] | []>([]);

  useEffect(() => {
    const fecthLogos = async () => {
      try {
        const data = await getClientLogos(lang);
        setLogos(data);
      } catch (error) {
        console.log('🚀 ~ fecthLogos ~ error:', error);
      }
    }

    fecthLogos();
  }, []);

	return (
		<CContainer className="d-flex gap-4 overflow-auto p-4 justify-content-center">
			{logos.map((item) => (
				<div
					key={item.id}
					className="d-flex flex-column align-items-center"
					style={{ minWidth: '150px', maxWidth: '150px' }}
        >
					<StrapiImage
						src={item.Logo.url}
						alt={item.ClientName}
						width={150}
						height={100}
						className="img-fluid"
					/>
				</div>
			))}
		</CContainer>
	);
};

export default ClientLogos;
