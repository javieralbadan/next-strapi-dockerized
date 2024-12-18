'use client';

import { ClientLogo } from '@/types/ClientLogo';
import { CContainer } from '@coreui/react';
import React from 'react';
import StrapiImage from './StrapiImage';

interface Props {
	logos: ClientLogo[];
}

const ClientLogos: React.FC<Props> = ({ logos }) => {
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
						height={150}
						className="img-fluid"
					/>
				</div>
			))}
		</CContainer>
	);
};

export default ClientLogos;
