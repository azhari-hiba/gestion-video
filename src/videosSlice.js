import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "id1", image: "img1.jpg", url: "url1", titre: "titre1", duree: "120" },
  { id: "id2", image: "img2.jpg", url: "url2", titre: "titre2", duree: "100" },
  { id: "id3", image: "img3.jpg", url: "url3", titre: "titre3", duree: "200" },
];

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    ajouter: (state, action) => {state.push(action.payload)},
    supprimer:(state,action)=>{
        const {id}=action.payload
        return state.filter((video)=>video.id!==id)
    }
  },
});
export const{ajouter,supprimer}=videosSlice.actions
export default videosSlice.reducer
