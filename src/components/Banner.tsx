'use client';

import React from 'react';
import { CContainer, CRow, CCol, CButton } from '@coreui/react';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: 'url(/banner-bg.jpg)', backgroundSize: 'cover', padding: '100px 0' }}>
      <CContainer>
        <CRow className="align-items-center">
          <CCol xs={12} md={6}>
            <h1 className="display-3">Veilig mailen en bestanden delen met Microsoft 365</h1>
            <p className="mb-4">
              Veilig mailen en bestanden delen maar dan via uw vertrouwde Microsoft 365 omgeving. Dat is Bastion 365: een pluginloze, eenvoudig te implementeren integratie die gebruiksvriendelijk is voor uw medewerkers. Zo helpen wij organisaties binnen de overheid, zorg en juridische sector te voldoen aan standaarden als de AVG of NTA 7516.
            </p>
            <CButton color="primary" size="lg" href="/get-started">
              Get Started
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Banner;
