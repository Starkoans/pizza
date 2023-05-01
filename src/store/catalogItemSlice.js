import { createSlice} from "@reduxjs/toolkit";


const catalogItemSlice = createSlice(
    {
        name: 'catalogItem',

        initialState : {
            loading: false,
            catalogItems:[]
        },
        reducers:{
            addCatalogItem(state, action){
                const item = action.payload;

            }
        },
        extraReducers:{
            // добавляем редьюсер для показа предзагрузки
            'catalogItemSlice/fetchData/pending': (state, action) => {
                state.loading = true;
            },
            'catalogItemSlice/fetchData/fulfilled': (state, action) => {
                state.loading = false;
                state.data = action.payload;
            },
        }
    }
)