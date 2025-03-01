import { configureStore,createSlice } from "@reduxjs/toolkit";

const iState = {
    annonce : [],
    categories : [],
    regions : [],
    users : [],
    auth : {isLoggedIn : false , currentUser:null}
};

const store = createSlice ({
    name : 'application',
    intialState : iState ,
    reducers : {
        addannonce : (state,action) => {
            state.annonce.push(action.payload)
        },
        Updateannonce : (state,action) => {
            const index = state.annonce.findex((a)=> a.annonce == action.payload.id)
            if(index !== -1){
                state.annonce[index] = action.payload
            }
        },
        Deleteannonce : (state,action) => {
            state.annonce.filter((a)=> a.id !== action.payload)
        },
        connecter : (state,action) => {
            state.auth.isLoggedIn = True ;
            state.auth.currentUser = action.payload;
        },
        déconnecter : (state) => {
            state.auth.isLoggedIn = False;
            state.auth.currentUser = null;
        }
    }

})
export const {addannonce,Updateannonce,Deleteannonce,connecter,déconnecter} = mystore.reducer;
export const mystore = configureStore({reducer : appsslice.reducer})