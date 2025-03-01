// src/dbSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  annonces: [
    { id: 1, texte: 'Recherche jardinier', tel: '01L9304885', email: 'gegefernand@hotmail.com', prix: 'à débattre', ville: 'Paris', codepostal: 75000, regid: 3, catid: 1 },
    { id: 2, texte: 'Vend coccinelle choupette', tel: '0423456783', email: 'valerie.dupont@yahoo.com', prix: 'à débattre', ville: 'Marseille', codepostal: 13000, regid: 4, catid: 2 },
    { id: 3, texte: 'Vend appartement neuf', tel: '0450789800', email: 'dumoulin@anix.fr', prix: 'à débattre', ville: 'Annecy', codepostal: 74000, regid: 1, catid: 7 },
  ],
  categories: [
    { catid: 1, catnom: 'Emploi' },
    { catid: 2, catnom: 'Véhicule' },
    { catid: 3, catnom: 'Immobilier' },
    { catid: 4, catnom: 'Jardinage' },
    { catid: 5, catnom: 'Bricolage' },
    { catid: 6, catnom: 'Informatique' },
    { catid: 7, catnom: 'Maison' },
    { catid: 8, catnom: 'Sports' },
  ],
  regions: [
    { regid: 1, regnom: 'Alsace' },
    { regid: 2, regnom: 'Aquitaine' },
    { regid: 3, regnom: 'Auvergne' },
    { regid: 4, regnom: 'Bourgogne' },
    { regid: 5, regnom: 'Bretagne' },
    { regid: 6, regnom: 'Centre' },
    { regid: 7, regnom: 'Champagne' },
    { regid: 8, regnom: 'Limousin' },
  ],
  users: [
    { id: 1, uname: 'user1', upass: 'pass1' },
    { id: 2, uname: 'user2', upass: 'pass2' },
    { id: 3, uname: 'user3', upass: 'pass3' },
    { id: 4, uname: 'user4', upass: 'pass4' },
    { id: 5, uname: 'user5', upass: 'pass5' },
  ],
  user: null,
};

export const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    insererAnnonce: (state, action) => {
      state.annonces.push(action.payload);
    },
    modifierAnnonce: (state, action) => {
      const index = state.annonces.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state.annonces[index] = action.payload;
      }
    },
    supprimerAnnonce: (state, action) => {
      state.annonces = state.annonces.filter((a) => a.id !== action.payload);
    },
    connecter: (state, action) => {
      state.user = action.payload;
    },
    deconnecter: (state) => {
      state.user = null;
    },
  },
});

export const { insererAnnonce, modifierAnnonce, supprimerAnnonce, connecter, deconnecter } =
  dbSlice.actions;

export default dbSlice.reducer;