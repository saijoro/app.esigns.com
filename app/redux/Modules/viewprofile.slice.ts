import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  selectedId: string | null;
  refId: null;
}

const initialState: UserState = {
  selectedId: null,
  refId: null,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },
    setRefId: (state: any, action: any) => {
      state.refId = action.payload;
    },
  },
});

export const { setSelectedId, setRefId } = userSlice.actions;

export default userSlice.reducer;
