// src/components/AnnsByReg.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AnnsByReg = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const annonces = useSelector((state) => state.db.annonces);
  const regions = useSelector((state) => state.db.regions);

  const filteredAnnonces = annonces.filter(
    (annonce) => !selectedRegion || annonce.regid === parseInt(selectedRegion)
  );

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="region">Sélectionnez une région :</label>
      <select
        id="region"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      >
        <option value="">Toutes les régions</option>
        {regions.map((region) => (
          <option key={region.regid} value={region.regid}>
            {region.regnom}
          </option>
        ))}
      </select>

      <ul>
        {filteredAnnonces.map((annonce) => (
          <li key={annonce.id}>{annonce.texte}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnnsByReg;