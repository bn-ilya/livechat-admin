import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UsersPermissionsUser } from '../../../../shared/api';

interface IInitialState {
  fullCountRegistered: number;
  countRegisteredWithForm: number;
  countRegisteredWithoutForm: number;
  countRegisteredPaid: number;
}

const initialState: IInitialState= {
  fullCountRegistered: 0,
  countRegisteredWithForm: 0,
  countRegisteredWithoutForm: 0,
  countRegisteredPaid: 0
}

export const statisticSlice = createSlice({
  name: 'statistic',
  initialState: initialState,
  reducers: {
    setCounts: (state, {payload}: PayloadAction<UsersPermissionsUser[]>) => {
      let fullCount = 0;
      let withFormCount = 0;
      let withoutFormCount = 0;
      let paidCount = 0;

      payload.forEach(user => {
        user?.lc_form ? fullCount += user.lc_form.count : fullCount += 1;
        if (user?.lc_form) withFormCount += user.lc_form.count;
        if (!user?.lc_form) withoutFormCount += 1;
        if (user?.lc_form?.cheques) paidCount += user.lc_form.count;
      })

      state.fullCountRegistered = fullCount;
      state.countRegisteredWithForm = withFormCount;
      state.countRegisteredWithoutForm = withoutFormCount;
      state.countRegisteredPaid = paidCount;
    }
  }
})

export const { setCounts } = statisticSlice.actions;
export default statisticSlice.reducer;