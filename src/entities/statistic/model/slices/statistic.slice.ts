import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UsersPermissionsUser } from '../../../../shared/api';

interface IInitialState {
  fullCountRegistered: number;
  countRegisteredWithForm: number;
  countRegisteredWithoutForm: number;
  countRegisteredPaid: number;
  sum: number;
  came: number;
}

const initialState: IInitialState= {
  fullCountRegistered: 0,
  countRegisteredWithForm: 0,
  countRegisteredWithoutForm: 0,
  countRegisteredPaid: 0,
  sum: 0,
  came: 0,
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
      let sum = 0;
      let came = 0;

      payload.forEach(user => {
        user?.lc_form ? fullCount += user.lc_form.count : fullCount += 1;
        if (user?.lc_form) withFormCount += user.lc_form.count;
        if (!user?.lc_form) withoutFormCount += 1;
        if (user?.lc_form?.paid && user?.lc_form?.paid > 0) paidCount += user.lc_form.count;
        if (user?.lc_form?.paid && user?.lc_form?.paid > 0) sum += Number(user?.lc_form?.paid);
        if (user?.lc_form?.turnout) came += Number(user?.lc_form?.turnout) + (user?.lc_form?.live_chat_client_childrens?.reduce((total, child)=> total + (child?.turnout || 0), 0) || 0);
      })

      state.fullCountRegistered = fullCount;
      state.countRegisteredWithForm = withFormCount;
      state.countRegisteredWithoutForm = withoutFormCount;
      state.countRegisteredPaid = paidCount;
      state.sum = sum;
      state.came = came;
    }
  }
})

export const { setCounts } = statisticSlice.actions;
export default statisticSlice.reducer;