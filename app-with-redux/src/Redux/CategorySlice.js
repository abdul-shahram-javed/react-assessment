import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    selectedCategoriesList: {},
    selectedNomineeIds: {}
  },
  reducers: {
    saveSelectedNomineeId: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.selectedNomineeIds[action.payload.categoryId] = action.payload.nomineeId
    },
    saveSelectedNominee: (state, action) => {
        if (state.selectedCategoriesList.hasOwnProperty(action.payload.type) && state.selectedCategoriesList[action.payload.type] === true) {
            return {...state}
        }
        state.selectedCategoriesList[action.payload.type] = true;
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveSelectedNomineeId, saveSelectedNominee } = categorySlice.actions

export default categorySlice.reducer