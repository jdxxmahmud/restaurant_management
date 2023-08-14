import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getRestaurantContent = createAsyncThunk('restaurant/getRestaurantContent', async () => {
    const response = await axios.get('http://localhost:8080/api/restaurants/list', {})
    return response.data
})


export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        isLoading: false,
        restaurant: []
    },
    reducers: {
        addRestaurant: (state, action) => {
            let { newrestaurantObj } = action.payload
            state.restaurant = [...state.restaurant, newrestaurantObj]
        },
        editRestaurant: (state, action) => {
            let { newrestaurantObj } = action.payload
            state.restaurant = [...state.restaurant, newrestaurantObj]
        },
        deleteRestaurant: (state, action) => {
            let { index } = action.payload
            state.restaurant.splice(index, 1)
        }
    },

    extraReducers: {
        [getRestaurantContent.pending]: state => {
            state.isLoading = true
        },
        [getRestaurantContent.fulfilled]: (state, action) => {
            state.restaurant = action.payload
            state.isLoading = false
        },
        [getRestaurantContent.rejected]: state => {
            state.isLoading = false
        },
    }
})

export const { addRestaurant, editRestaurant, deleteRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;