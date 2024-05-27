import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    bannerData : [],
    imageURL : ""

}
export const movieoSlice = createSlice({
    name : 'movieo',
    initialState,
    reducers : {
        setBannerData : (state, action)=>{
            state.bannerData = action.payload
        },
        setImageUrl : (state,action)=>{
            state.imageURL = action.payload
        }
    }
})

export const { setBannerData, setImageUrl } = movieoSlice.actions

export default movieoSlice.reducer