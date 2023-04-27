import { createSlice} from "@reduxjs/toolkit";


const catalogItemSlice = createSlice(
    {
        name: 'catalogItem',

        initialState : {
            catalogItems:[]
        },
        reducers:{
            addCatalogItem(state, action){
                const item = action.payload;

            }
        }
    }
)