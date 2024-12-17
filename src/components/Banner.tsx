'use client';

import React from 'react';
import { CContainer, CRow, CCol, CButton } from '@coreui/react';

const BANNER_STYLES = {
  backgroundImage: 'url(/windows-banner.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
  padding: '100px 0' 
};

const Banner = () => {
  return (
    <div className="banner" style={BANNER_STYLES}>
      <CContainer>
        <CRow className="align-items-center text-white">
          <CCol xs={12} md={6}>
            <h1 className="display-5 fw-semibold">Veilig mailen en bestanden delen met <span className="text-info">Microsoft 365</span></h1>
            <p className="mb-4 ">
              Veilig mailen en bestanden delen maar dan via uw vertrouwde Microsoft 365 omgeving. Dat is Bastion 365: een pluginloze, eenvoudig te implementeren integratie die gebruiksvriendelijk is voor uw medewerkers. Zo helpen wij organisaties binnen de overheid, zorg en juridische sector te voldoen aan standaarden als de AVG of NTA 7516.
            </p>
            <p className="mb-4 fw-semibold">Zie Bastion 365 in actie</p>
            <CButton color="info" size="sm" className="rounded-3 px-3" href="/get-started">
              Vraag een persoonlijke demo aan
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Banner;
